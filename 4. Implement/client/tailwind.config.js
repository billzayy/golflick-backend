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
        "login": '#355B3E',
        "upGreen" : "#00B69B"
      },
      backgroundColor: {
        "login": '#355B3E',
        "imgLogin": '#F5DBC4',
        "adminTabs": '#273142',
        "adminBg": "#1B2431",
        "adminSearchDark": "#323D4E",
        "statisticBg": "#273142",
        "totalUserBg": "#8280FF",
        "totalOrderBg": "#FEC53D",
        "totalSaleBg": "#4AD991",
        "totalPendingBg": "#FF9066",
        "monthChartBg": "#323D4E",
        "menuBg" : "#4880FF"
        // "loginBtn": '#029664'
      },
      borderColor: {
        "inputBox": '#B8D6BF',
        "statisticBorder": "#313D4F",
        "monthChartBorder":"rgba(207, 207, 207, 0.1142)"
      }
    },
  },
  plugins: [],
}

