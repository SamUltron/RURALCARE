/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '30/70': '20% 80%',
        '40/60': '40% 60%',
      },
    },
  },
  plugins: [],
}