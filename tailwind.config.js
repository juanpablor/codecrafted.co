/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B0A0B',
        primary: '#251921',
        secondary: '#78475C',
        light: '#FCFCFC',
        purpledark: '#463043',
        purplesemidark: '#682B2B',
        purplesemilight: '#94758D',
        purplelight: '#BBB0B7'
        // those colors are defined according to an screenshot in images
      }
    },
  },
  plugins: [],
}
