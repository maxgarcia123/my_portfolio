import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgTernary: "var(--bg-ternary)",
        bgLight: "var(--bg-light)",
        primaryColorDefault: "var(--primary-color-default)",
        primaryColorLight: "var(--primary-color-light)",
      },
    },
  },
  plugins: [],
};
export default config;
