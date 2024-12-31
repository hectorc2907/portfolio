/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: "Playfair Display",
      },
      colors: {
        redIcon: "#E51C24",
        cianIcon: " #1CE0D9",
      },
      backgroundColor: {
        redIcon: "#E51C24",
        cianIcon: "#1CE0D9",
      },
      borderColor: {
        redIcon: "#E51C24",
        cianIcon: "#1CE0D9",
      },
    },
  },
  plugins: [],
};
