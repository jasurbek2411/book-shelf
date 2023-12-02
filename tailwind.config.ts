import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      light: "#fff",
      purple: "#6200EE",
      dark: "#151515",
      black: "#24272C",
      gray: "#333333",
      dark2: "#151515",
      green:'#52C41A',
      red:'#FF0000'
    },
    screens: {
      mobileS: "350px",
      mobileL: "400px",
      mobileX: "500px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },

  plugins: [],
};
export default config;
