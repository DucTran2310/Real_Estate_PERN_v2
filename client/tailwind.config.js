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
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}