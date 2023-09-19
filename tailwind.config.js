/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'space-grotesk' : ['Space Grotesk','sans' ]
      },
      gradientColorStops: {
        'custom-start': '#0f051d',
        'custom-end': '#080749  ',
      }, 
      'reset': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
      },
      keyframes: {
      },
      
    },
  },
  plugins: [],
} 

