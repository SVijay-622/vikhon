import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96A",
          dark: "#A07830",
        },
        "card-dark": "#1A1A1A",
      },
      animation: {
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(201,168,76,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.5)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
