import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#f6f2e7",
          soft: "#faf7ef",
          deep: "#efe8d6",
        },
        pine: {
          50: "#eef2ee",
          100: "#d3ded2",
          200: "#a8c0a5",
          300: "#7a9d76",
          400: "#4f7a4d",
          500: "#365c37",
          600: "#284428",
          700: "#1f351f",
          800: "#152717",
          900: "#0f1c12",
          950: "#0a130c",
        },
        amber: {
          DEFAULT: "#b9863f",
          soft: "#d3a866",
          deep: "#8f6428",
        },
        bark: "#3a2f22",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/grain.svg')",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
