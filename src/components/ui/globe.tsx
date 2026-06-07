"use client";

import { useEffect, useRef, useState } from "react";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  PointLight,
  Color,
  Fog,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ThreeGlobe from "three-globe";

const RING_PROPAGATION_SPEED = 3;

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}

export function World({ globeConfig, data }: WorldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [countriesData, setCountriesData] = useState<GeoJSON.FeatureCollection | null>(null);

  const cfg = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#062056",
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    autoRotate: true,
    autoRotateSpeed: 0.5,
    ...globeConfig,
  };

  useEffect(() => {
    fetch("/data/globe.json")
      .then((r) => r.json())
      .then(setCountriesData)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !countriesData) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // ── Renderer ─────────────────────────────────────────
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── Scene + Camera ───────────────────────────────────
    const scene = new Scene();
    scene.fog = new Fog(0xffffff, 400, 2000);

    const camera = new PerspectiveCamera(50, w / h, 180, 1800);
    camera.position.z = 300;

    // ── Lights ───────────────────────────────────────────
    const al = new AmbientLight(cfg.ambientLight, 0.6);
    scene.add(al);

    const dl1 = new DirectionalLight(cfg.directionalLeftLight, 0.8);
    dl1.position.set(-400, 100, 400);
    scene.add(dl1);

    const dl2 = new DirectionalLight(cfg.directionalTopLight, 0.8);
    dl2.position.set(-200, 500, 200);
    scene.add(dl2);

    const pl = new PointLight(cfg.pointLight, 0.8);
    pl.position.set(-200, 500, 200);
    scene.add(pl);

    // ── Globe ─────────────────────────────────────────────
    const globe = new ThreeGlobe();
    scene.add(globe);

    // Material
    const mat = globe.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    mat.color = new Color(cfg.globeColor);
    mat.emissive = new Color(cfg.emissive);
    mat.emissiveIntensity = cfg.emissiveIntensity;
    mat.shininess = cfg.shininess;

    // Polygons (countries)
    globe
      .hexPolygonsData(countriesData.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(cfg.showAtmosphere)
      .atmosphereColor(cfg.atmosphereColor)
      .atmosphereAltitude(cfg.atmosphereAltitude)
      .hexPolygonColor(() => cfg.polygonColor);

    // Points
    const points = data
      .flatMap((arc) => [
        { size: cfg.pointSize, order: arc.order, color: arc.color, lat: arc.startLat, lng: arc.startLng },
        { size: cfg.pointSize, order: arc.order, color: arc.color, lat: arc.endLat, lng: arc.endLng },
      ])
      .filter((v, i, a) => a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i);

    globe
      .pointsData(points)
      .pointColor((d) => (d as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    // Arcs
    globe
      .arcsData(data)
      .arcStartLat((d) => (d as Position).startLat)
      .arcStartLng((d) => (d as Position).startLng)
      .arcEndLat((d) => (d as Position).endLat)
      .arcEndLng((d) => (d as Position).endLng)
      .arcColor((d: object) => (d as Position).color)
      .arcAltitude((d) => (d as Position).arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(cfg.arcLength)
      .arcDashInitialGap((d) => (d as Position).order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => cfg.arcTime);

    // Rings (initially empty, set via interval below)
    globe
      .ringsData([])
      .ringColor(() => cfg.polygonColor)
      .ringMaxRadius(cfg.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((cfg.arcTime * cfg.arcLength) / cfg.rings);

    // ── OrbitControls ────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = 300;
    controls.maxDistance = 300;
    controls.autoRotate = cfg.autoRotate ?? true;
    controls.autoRotateSpeed = cfg.autoRotateSpeed ?? 0.5;
    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 3;

    // ── Pulsing rings ─────────────────────────────────────
    const ringInterval = setInterval(() => {
      const indices = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
      globe.ringsData(
        data.filter((_, i) => indices.includes(i)).map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }))
      );
    }, 2000);

    // ── Resize ───────────────────────────────────────────
    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // ── Render loop ───────────────────────────────────────
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(ringInterval);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", onResize);
    };
  }, [countriesData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
    />
  );
}
