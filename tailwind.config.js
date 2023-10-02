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
        'custom-end': '#080749',
        'chart-start': '#04031E',
        'chart-end' : '#260D4B',
        
      },  
      'reset': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
      },
      keyframes: {
      },
      screens: {
        'xl-max': { 'max': '1280px' },
        'lg-max': { 'max': '1024px' },
        'market-max': { 'max': '1094px' },
        'l-max': {'max' : '900px'},
        'md-max': { 'max': '768' },
        'sm-max': { 'max': '640px' },
        'xs-max': {'max' : '450px'},
        'xxs-max':{'max' : '350px'}
      },
      colors: {
        'dark': '#0f051d'
      },
    },
  },
  plugins: [
      require('tailwind-scrollbar')
  ],
} 

