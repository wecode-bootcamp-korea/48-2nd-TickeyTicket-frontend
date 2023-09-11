/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      width: {
        '24.3%': '24.3%',
        '32.5%': '32.5%',
        '112.5%': '112.5%',
      },
      height: {
        22.5: '22.5rem',
      },
      spacing: {
        m5rem: '-5rem',
      },
      colors: {
        brand: '#FF097F',
        primary: '#2F3438',
        pink: '#FF5492',
        babypink: '#FEF6FE',
        darkgray: '#828282',
        mediumgray: '#B6BDC7',
        lightgray: '#DADDE0',
      },
      screens: {
        xl: '1280px',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      backgroundImage: {
        logo: `url('../public/assets/logo.png')`,
        defaultUserImage: `url('../public/assets/userImage.png')`,
      },
    },
    plugins: [],
  },
};
