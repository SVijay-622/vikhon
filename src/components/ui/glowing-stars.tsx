"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      className={cn(
        "bg-[#0F0F0F] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-zinc-800 hover:border-indigo-500/40 transition-colors duration-300",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEntered={mouseEntered} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base text-zinc-400 max-w-[16rem]", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-2xl text-white", className)}>
      {children}
    </h2>
  );
};

const Illustration = ({ mouseEntered }: { mouseEntered: boolean }) => {
  const stars = 108;
  const columns = 18;
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-48 p-1 w-full"
      style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "1px" }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div key={`matrix-col-${starIdx}}`} className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {mouseEntered ? (
                <motion.div
                  key={`${starIdx}-${mouseEntered}`}
                  initial={{ scale: 1 }}
                  animate={isGlowing ? { scale: [1, 1.2, 2.5, 2.2, 1.5], background: "#fff", zIndex: 20 } : {}}
                  transition={{ duration: 2, ease: "easeInOut", delay: delay }}
                  exit={{ scale: 1, zIndex: 0 }}
                  style={{ width: "1px", height: "1px", borderRadius: "50%", background: isGlowing ? "#fff" : "#A1A1AA" }}
                />
              ) : (
                <motion.div
                  key={`${starIdx}-not-entered`}
                  initial={{ scale: 1, background: "#A1A1AA" }}
                  animate={isGlowing ? { scale: [1, 1.2, 2.5, 2.2, 1.5], background: "#fff", zIndex: 20 } : {}}
                  transition={{ duration: 2, ease: "easeInOut", delay: staticDelay }}
                  exit={{ scale: 1, background: "#A1A1AA", zIndex: 0 }}
                  style={{ width: "1px", height: "1px", borderRadius: "50%" }}
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
