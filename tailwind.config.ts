import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-fade-in": "text-fade-in 1s ease-in-out forwards",
        "text-fade-out": "text-fade-out 1s ease-in-out forwards",
        "fade-left": "fade-left 0.5s ease-in-out forwards",
        "fade-right": "fade-right 0.5s ease-in-out forwards",
      },
      keyframes: {
        "text-fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        "text-fade-out": {
          "0%": { opacity: "1", transform: "translateY(0px)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
