/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // add more paths here if needed (for example, "./components/**/*.{js,ts,jsx,tsx}")
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}