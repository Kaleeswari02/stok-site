/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14F195',
        secondary: '#399FE9',
        tertiary: '#7928D2',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #14F195, #399FE9, #7928D2)',
      },
      fontFamily: {
        soehneBuch: ['SoehneBuch', 'sans-serif'],
    soehneHalbfett: ['SoehneHalbfett', 'sans-serif'],
    soehneKraeftig: ['SoehneKraeftig', 'sans-serif'],
    soehneExtrafett: ['SoehneExtrafett', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


