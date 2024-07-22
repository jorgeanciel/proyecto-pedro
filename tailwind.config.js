/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-medium": ["Montserrat-medium"],
        "montserrat-regular": ["Montserrat-regular"],
        "montserrat-bold": ["Montserrat-bold"],
        "montserrat-semibold": ["Montserrat-semibold"],
      },
      colors: {
        primary: "#7354D3",
        dark: "#29273e",
        secondary: "#FFD466",
        tertiary: "#4439F2",
        danger: "#f44336",
        danger2: "#f56564",
        success: "#4caf50",
        "danger-light": "#f56564",
        "gray-3": "#bec9da",
        "white-light": "#eee",
      },
      rotate: {
        60: "60deg",
      },
      alignItems: {
        normal: "normal",
      },
      fontSize: {
        xs11: "11px",
        xs10: "10px",
      },
    },
  },
  plugins: [],
};
