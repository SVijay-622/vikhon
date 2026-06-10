"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
    "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
  ];

  return (
    <div className={cn("absolute inset-0 flex items-center justify-center overflow-hidden", className)}>
      <svg
        className="absolute z-0 h-full w-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="20%" cx="50%" cy="0%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="beamMask">
            <rect id="beamRect" width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>
        {paths.map((path, idx) => (
          <motion.path
            key={`beam-${idx}`}
            d={path}
            stroke={`url(#linearGradient-${idx})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        {paths.map((path, idx) => (
          <motion.path
            key={`beam-masked-${idx}`}
            d={path}
            stroke={`url(#linearGradient-${idx})`}
            strokeWidth="1.5"
            mask="url(#beamMask)"
          />
        ))}
        <defs>
          {paths.map((_, idx) => (
            <motion.linearGradient
              id={`linearGradient-${idx}`}
              key={`gradient-${idx}`}
              initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", "97%"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#6366F1" />
              <stop offset="32.5%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </motion.linearGradient>
          ))}
          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)" />
            <stop offset="0.243243" stopColor="var(--neutral-300)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
