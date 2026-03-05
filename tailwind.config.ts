import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-strong": "#1D4ED8",
        secondary: "#3B82F6",
        accent: "#F97316",
        paper: "#F8FAFC",
        ink: "#1E293B",
        navy: "#0F2744"
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Avenir Next", "Avenir", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 39, 68, 0.08)",
        glass: "0 22px 70px rgba(15, 39, 68, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
