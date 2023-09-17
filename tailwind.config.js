/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans' : ['Titillium Web','sans-serif' ]
      },
      gradientColorStops: {
        'custom-start': '#0f051d',
        'custom-end': '#23034d',
      }
    },
  },
  plugins: [],
} 
