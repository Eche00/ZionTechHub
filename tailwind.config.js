/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
    screens: {
      smm: "1300px", // desktop view
      sm: "900px", // desktop view
      md: "750px", // tablet view
      lg: "370px", // iPhone sizes
      xl: "300px", // smaller phone sizes
      xxl: "1204px", // Desktop, laptops
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
