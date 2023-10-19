/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dots-background": "url('/assets/background/dots-background.svg')",
      },
      colors: {
        myPurple: "#6152ff",
        myPurpleSec: "#4e3eff",
        myDarkPurple: "#2f3349",
        myGreenA: "#b6e6a2",
        myGreenB: "#5eda2a",
        myGreenC: "#dedf38",
        myGreenD: "#1a6104",
      },
    },
  },
  plugins: [],
};
