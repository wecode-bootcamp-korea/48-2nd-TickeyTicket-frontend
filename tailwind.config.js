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
        brand: '#F96162',
        backgroundImage: {
          logo: `url('../public/assets/logo.png')`,
          defaultUserImage: `url('../public/assets/userImage.png')`,
        },
      },
    },
    plugins: [],
  },
};
