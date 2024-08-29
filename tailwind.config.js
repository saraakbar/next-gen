/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for automatic based on user's OS preference
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
