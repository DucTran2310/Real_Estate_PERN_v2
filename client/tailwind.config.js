/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#091a2b',
        main: '#005163',
        secondary: '#f1f3f4'
      },
      backgroundColor: {
        primary: '#f1f3f4',
        main: '#005163'
      },
      keyframes: {
        "scale-up-center": {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.3)',
          },
        },
      },
      animation: {
        "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};