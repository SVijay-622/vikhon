"use client";
import { useEffect, useRef, useState } from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const LOADING_STATES = [
  { text: "Initializing VIKHON..." },
  { text: "Loading your experience..." },
  { text: "Crafting the extraordinary..." },
  { text: "Almost there..." },
  { text: "Welcome to VIKHON ✓" },
];

const STEP_DURATION = 560;
const SESSION_KEY = "vikhon-loaded-v2";
const TOTAL_MS = LOADING_STATES.length * STEP_DURATION + 350;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Repeat visit: skip the loader entirely
    if (sessionStorage.getItem(SESSION_KEY)) {
      onCompleteRef.current();
      return;
    }

    let cancelled = false;

    // Show the loader
    setLoading(true);

    const hideTimer = setTimeout(() => {
      if (cancelled) return;
      setLoading(false);
      sessionStorage.setItem(SESSION_KEY, "1");
      setTimeout(() => {
        if (!cancelled) onCompleteRef.current();
      }, 600);
    }, TOTAL_MS);

    return () => {
      // React 18 Strict Mode runs cleanup + re-run. Reset so the second run
      // starts fresh (setLoading(false) → re-run sets it back to true with a new timer).
      cancelled = true;
      clearTimeout(hideTimer);
      setLoading(false);
    };
  }, []);

  return (
    <MultiStepLoader
      loadingStates={LOADING_STATES}
      loading={loading}
      duration={STEP_DURATION}
    />
  );
}
