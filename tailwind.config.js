/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutral tokens are CSS-variable driven so the dark/light toggle works.
        // `<alpha-value>` lets Tailwind opacity modifiers (e.g. bg-background/70)
        // keep working. Brand colors stay fixed in both themes.
        background: "rgb(var(--bg-rgb) / <alpha-value>)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "#7C3AED", // violet
          soft: "#8B5CF6",
        },
        secondary: {
          DEFAULT: "#06B6D4", // cyan
        },
        accent: "#8B5CF6",
        ink: {
          DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)",
          muted: "rgb(var(--ink-muted-rgb) / <alpha-value>)",
        },
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "aurora":
          "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, rgba(6,182,212,0.12) 40%, transparent 70%)",
        "gradient-brand": "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,58,237,0.55)",
        "glow-cyan": "0 0 40px -10px rgba(6,182,212,0.55)",
        card: "0 8px 40px -12px rgba(0,0,0,0.6)",
      },
      keyframes: {
        blob: {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        blob: "blob 18s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [],
};
