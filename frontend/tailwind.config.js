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
        cianIcon: "#1CE0D9",
        "gray-150": "#f1f5f9",
        "gray-850": "#2a2f3a",
      },
      backgroundColor: {
        redIcon: "#E51C24",
        cianIcon: "#1CE0D9",
        "gray-150": "#f0f0f5",
        "gray-850": "#2a2f3a",
      },
      borderColor: {
        redIcon: "#E51C24",
        cianIcon: "#1CE0D9",
        "gray-150": "#f0f0f5",
        "gray-850": "#2a2f3a",
      },
    },
  },
  plugins: [],
};
