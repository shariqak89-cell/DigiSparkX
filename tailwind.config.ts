import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#061632",
        spark: "#ff7a00",
        electric: "#0b58d9",
        aqua: "#10d7ff"
      },
      boxShadow: {
        glow: "0 0 50px rgba(255, 122, 0, 0.24)",
        blueglow: "0 0 60px rgba(11, 88, 217, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
