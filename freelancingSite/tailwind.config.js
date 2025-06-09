/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        opensans: ['Open+Sans', 'sans-serif'],
        poppins:['Poppins'],
        
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

