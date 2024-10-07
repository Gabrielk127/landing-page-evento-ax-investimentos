import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-background": "#1E1E1E",
        "custom-background-black": "#111111",
        "custom-background-button": "#DAA520",
        "custom-background-white": "#FFFFFF",
      },
      textColor: {
        "custom-text-title": "#DAA520",
        "custom-text-button": "#111111",
      },
    },
  },
  plugins: [],
};
export default config;
