/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // — Background
        "bg-deep":    "#050A12",
        "bg-alt":     "#0C1220",
        "surface":    "#111827",
        "border-dim": "#1E2D40",
        // — Accents
        "cyan":       "#00D8FF",
        "violet":     "#7C3AED",
        // — Text
        "text-pri":   "#F0F4F8",
        "text-sec":   "#8899AA",
        "text-muted": "#445566",
        "success":    "#22C55E",
        "warning":    "#F59E0B",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["DM Sans", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #00D8FF, #7C3AED)",
      },
      animation: {
        "float":      "float 6s ease-in-out infinite",
        "pulse-dot":  "pulse-dot 2s ease infinite",
        "ring-spin":  "ring-spin 12s linear infinite",
        "scroll-line":"scroll-line 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":       { transform: "translateY(-18px) rotate(5deg)" },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.5)" },
          "50%":       { boxShadow: "0 0 0 6px rgba(34,197,94,0)" },
        },
        "ring-spin": {
          from: { transform: "translate(-50%, -50%) rotate(0deg)" },
          to:   { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "scroll-line": {
          "0%":   { transform: "scaleY(0)", transformOrigin: "top", opacity: "0" },
          "50%":  { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
