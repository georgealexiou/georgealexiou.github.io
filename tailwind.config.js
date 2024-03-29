/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xyz: '150vh',
        xyzMobile: '30vh',
      },
      letterSpacing: {
        xyz: '0.1em',
      },
      lineHeight: {
        xyz: '1',
      },
    },
  },
  plugins: [],
};
