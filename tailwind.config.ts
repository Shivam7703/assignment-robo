import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'lobster': ['var(--font-lobster)', ...fontFamily.sans],
        'noto-serif': ['var(--font-noto-serif)', ...fontFamily.serif],
        'mulish': ['var(--font-mulish)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
