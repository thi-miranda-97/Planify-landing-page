import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        white: "var(--white)",
        yellow: "var(--yellow)",
        purple: "var(--purple)",
        light: "var(--light)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "dark-glow":
          "0px 4px 6px rgba(255, 255, 255, 0.1), 0px 1px 3px rgba(255, 255, 255, 0.06)",
      },
      animation: {
        marquee: "marquee 300s linear infinite",
        "marquee-reverse": "marquee2 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
