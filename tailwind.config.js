/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "page-background":
          "linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url('bg.jpg')",
      },
      animation: {
        rotation: "rotation 2s ease-in-out infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    plugins: [],
  },
};

export default config;
