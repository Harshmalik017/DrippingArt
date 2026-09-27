import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF4EC",
          deep: "#F3E7DA",
        },
        blush: {
          DEFAULT: "#F3CFC6",
          light: "#F9E3DC",
          dark: "#E3AFA3",
        },
        coral: {
          DEFAULT: "#E68B6D",
          light: "#EFA98F",
          dark: "#D06B4C",
        },
        terracotta: {
          DEFAULT: "#B85A3B",
          dark: "#95462D",
        },
        gold: {
          DEFAULT: "#C69A56",
          light: "#DFC08C",
          dark: "#A67D3D",
        },
        plum: {
          DEFAULT: "#8C5259",
          dark: "#6B3B41",
        },
        ink: {
          DEFAULT: "#2E241E",
          soft: "#5A4B41",
        },
        night: {
          DEFAULT: "#1D1613",
          surface: "#2A211B",
          elevated: "#362A22",
          soft: "#C9B8A8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "drip-gradient":
          "radial-gradient(circle at 20% 20%, rgba(230,139,109,0.30), transparent 55%), radial-gradient(circle at 80% 0%, rgba(198,154,86,0.25), transparent 50%), radial-gradient(circle at 90% 80%, rgba(243,207,198,0.45), transparent 55%)",
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 47% 42% 58% 53%",
        clay: "1.75rem",
      },
      keyframes: {
        drip: {
          "0%": { transform: "translateY(-6px) scaleY(0.9)", opacity: "0" },
          "60%": { transform: "translateY(2px) scaleY(1.05)", opacity: "1" },
          "100%": { transform: "translateY(0) scaleY(1)", opacity: "1" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        drip: "drip 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "rise-in": "rise-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
