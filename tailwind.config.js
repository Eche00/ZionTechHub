/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "900px", // desktop view
      md: "750px", // tablet view
      lg: "370px", // iPhone sizes
      xl: "300px", // smaller phone sizes
      "2xl": "1024px", // Desktop, laptops
    },
  },
  plugins: [],
};
