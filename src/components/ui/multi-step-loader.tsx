"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type LoadingState = { text: string };

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function StepRow({
  state,
  status,
  index,
}: {
  state: LoadingState;
  status: "done" | "active" | "pending";
  index: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.3 }}
    >
      {/* Icon */}
      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
        {status === "done" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 16 }}
            className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white"
            style={{ boxShadow: "0 0 10px rgba(99,102,241,0.6)" }}
          >
            <CheckIcon />
          </motion.div>
        )}

        {status === "active" && (
          <motion.div
            className="w-6 h-6 rounded-full border-2 border-indigo-500 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, ease: "linear", repeat: Infinity }}
          />
        )}

        {status === "pending" && (
          <div className="w-6 h-6 rounded-full border border-zinc-800" />
        )}
      </div>

      {/* Text */}
      <span
        className="text-sm font-medium transition-colors duration-300 flex-1"
        style={{
          color:
            status === "done"
              ? "#818CF8"
              : status === "active"
              ? "#ffffff"
              : "#3F3F46",
        }}
      >
        {state.text}
      </span>

      {/* Done tick */}
      <AnimatePresence>
        {status === "done" && (
          <motion.span
            key="tick"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[11px] text-indigo-500 font-mono"
          >
            ✓
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function MultiStepLoader({
  loadingStates,
  loading = false,
  duration = 560,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  // Keep the overlay in the DOM briefly after loading=false so the fade-out plays
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (loading) {
      setCurrent(0);
      setVisible(true);

      // Fade in — small rAF delay so the browser paints the element first
      const fadeIn = requestAnimationFrame(() => {
        requestAnimationFrame(() => setOpacity(1));
      });

      const interval = setInterval(() => {
        setCurrent((prev) => {
          if (prev >= loadingStates.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, duration);

      return () => {
        cancelAnimationFrame(fadeIn);
        clearInterval(interval);
      };
    } else {
      // Fade out, then remove from DOM
      setOpacity(0);
      const hide = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(hide);
    }
  }, [loading, loadingStates.length, duration]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center px-6"
      style={{
        zIndex: 99999,
        backgroundColor: "#0A0A0A",
        opacity,
        transition: "opacity 0.45s ease",
        pointerEvents: opacity > 0 ? "auto" : "none",
      }}
    >
      {/* VIKHON logo */}
      <div className="mb-10 text-center select-none">
        <span
          className="font-black tracking-[0.25em] uppercase block"
          style={{ fontSize: "clamp(2.5rem, 8vw, 3.75rem)", color: "#C9A84C" }}
        >
          VIKHON
        </span>
        <p
          className="mt-2 uppercase text-zinc-600"
          style={{ fontSize: "10px", letterSpacing: "0.45em" }}
        >
          Where Service Meets The Extraordinary
        </p>
      </div>

      {/* Separator */}
      <div
        className="h-px mb-10"
        style={{
          width: "180px",
          background:
            "linear-gradient(to right, transparent, rgba(99,102,241,0.55), transparent)",
        }}
      />

      {/* Steps */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {loadingStates.map((state, i) => (
          <StepRow
            key={i}
            state={state}
            status={i < current ? "done" : i === current ? "active" : "pending"}
            index={i}
          />
        ))}
      </div>

      {/* Progress strip */}
      <div className="flex items-center gap-1.5 mt-10">
        {loadingStates.map((_, i) => (
          <div
            key={i}
            className="h-[3px] rounded-full transition-all duration-300"
            style={{
              width: i === current ? "28px" : "6px",
              backgroundColor:
                i < current ? "#4F46E5" : i === current ? "#6366F1" : "#27272A",
            }}
          />
        ))}
      </div>
    </div>
  );
}
