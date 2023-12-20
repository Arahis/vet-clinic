import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      main: "var(--main-font)",
      accent: "var(--accent-font)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-main": "#f78263",
        "violet-main": "#a6aae4",
        "yellow-main": "#fff8cc",
        "green-main": "#bae4a5",
        "peach-main": "#f5b2a0",
        "azure-main": "#a5e2e4",
        "blue-main": "#a0d6f5",
      },
    },
  },
  plugins: [],
};
export default config;
