"use client";

import { useState, useCallback, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import WhyVikhon from "@/components/sections/WhyVikhon";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

const SESSION_KEY = "vikhon-loaded-v2";

export default function HomePage() {
  // Start true if repeat visit (skip loader), false if first visit (wait for loader)
  const [loaded, setLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setLoaded(true), []);

  // On repeat visits, reveal the page immediately without waiting for the loader
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <LoadingScreen onComplete={onLoadComplete} />
      <CustomCursor />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: loaded ? "auto" : "none",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Portfolio />
          <Process />
          <WhyVikhon />
          <TechStack />
          <About />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
