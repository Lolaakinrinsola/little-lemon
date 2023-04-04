/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans':[ 'Work Sans','sans-serif'],
      'mar': ['Markazi Text', 'serif'],
      'karla':['Karla','sans-serif']
    },
    boxShadow: {
      '3xl': ' 0 25px 50px -12px rgb(238 153 114 / 0.25)',
      'xl': '  0 20px 25px -5px rgb(0 0 0 / 0.1)',
      '3xl': ' 0 25px 50px -12px rgb(238 153 114 / 0.25)',
    },
    colors:{
      'primary':{
        10:'#495E47',
        20:'#F4CE14',
      },
      'secondary':{
        10:'#EE9972',
        20:'#FBDABB',
      },
      'highlight':{
        10:' #EDEFEE',
        20:'#333333',
      }
    },
    extend: {},
  },
  plugins: [],
}

