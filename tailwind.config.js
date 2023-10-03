/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./apps/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '470px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#ffffea',
        100: '#fffbc5',
        200: '#fff885',
        300: '#ffee46',
        400: '#ffdf1b',
        500: '#ffc107',
        600: '#e29400',
        700: '#bb6902',
        800: '#985108',
        900: '#7c420b',
        950: '#482200',
      },
      accent: {
        50: '#f4f6f7',
        100: '#e2e8eb',
        200: '#c8d4d9',
        300: '#a2b6be',
        400: '#74909c',
        500: '#607d8b',
        600: '#4d616d',
        700: '#42515c',
        800: '#3c474e',
        900: '#353d44',
        950: '#20272c',
      },
      red: {
        50: '#fef3f2',
        100: '#ffe3e1',
        200: '#ffccc8',
        300: '#ffa8a2',
        400: '#fc776d',
        500: '#f44336',
        600: '#e22d20',
        700: '#be2217',
        800: '#9d2017',
        900: '#82211a',
        950: '#470c08',
      },
      neutral: colors.neutral,
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
