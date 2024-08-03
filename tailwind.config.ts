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
        'custom-gray': '#222222', // Replace with your desired hex code
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #888888 0.5px, transparent 0.5px)',
      },
      backgroundSize: {
        'dot-pattern': '5px 5px', // Adjust the size here
      },
      fontSize: {
        '2xs': '0.70rem', // what I'm using
        '3xs': '0.55rem',
      },
    },
  },
  plugins: [],
};
export default config;
