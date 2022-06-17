module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
         blossom: '#EEBECE',
         mainBlue: '#0B24FB',
        },
        fontFamily: {
          mulish: ["Mulish", "sans-serif"],
        },
        screens: {
          'laptop': '1920px',
        },
    },
    plugins: [],
  }
}