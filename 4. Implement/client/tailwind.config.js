/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        "login": "1080px"
      },
      colors: {
        "green": '#029664',
        "login":'#355B3E'
      },
      backgroundColor: {
        "login": '#355B3E',
        "imgLogin": '#F5DBC4',
        // "loginBtn": '#029664'
      },
      borderColor: {
        "inputBox": '#B8D6BF' 
      }
    },
  },
  plugins: [],
}

