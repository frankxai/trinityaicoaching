import type { Config } from "tailwindcss";
// @ts-ignore optional plugin
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f8ff",
          100: "#e9edff",
          200: "#cfd7ff",
          300: "#a7b6ff",
          400: "#7b8cff",
          500: "#4f63ff",
          600: "#2e3ff0",
          700: "#1f2fcc",
          800: "#1c2aa3",
          900: "#1b287f"
        }
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
        hero: "radial-gradient(1200px 600px at 50% -10%, rgba(79,99,255,0.45), rgba(79,99,255,0) 60%), radial-gradient(800px 400px at 80% 10%, rgba(217,70,239,0.25), rgba(217,70,239,0) 60%)"
      }
    }
  },
  plugins: [typography],
} satisfies Config;
