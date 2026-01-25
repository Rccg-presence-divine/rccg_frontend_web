import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        // Ces variables --font-* seront définies dans votre layout
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        divine: {
          gold: "hsl(var(--divine-gold))",
          "gold-light": "hsl(var(--divine-gold-light))",
        },
        celestial: {
          blue: "hsl(var(--celestial-blue))",
        },
        // ... gardez le reste de vos couleurs ici
      },
      // ... gardez vos keyframes et animations (dove-fly, etc.)
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;