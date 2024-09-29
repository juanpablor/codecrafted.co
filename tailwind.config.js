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
        purplelight: '#BBB0B7',
        // those colors are defined according to an screenshot in images
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const hexToRgb = (hex) => {
        if (typeof hex !== 'string' || !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          return null; // Solo convertir si es un hex válido
        }
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
      };

      const colors = theme('colors');
      addBase({
        ':root': {
          '--color-dark': colors.dark,
          '--color-primary': colors.primary,
          '--color-secondary': colors.secondary,
          '--color-light': colors.light,
          '--color-purpledark': colors.purpledark,
          '--color-purplesemidark': colors.purplesemidark,
          '--color-purplesemilight': colors.purplesemilight,
          '--color-purplelight': colors.purplelight,
          '--color-dark-rgb': hexToRgb(colors.dark) || colors.dark,
          '--color-primary-rgb': hexToRgb(colors.primary) || colors.primary,
          '--color-secondary-rgb': hexToRgb(colors.secondary) || colors.secondary,
          '--color-light-rgb': hexToRgb(colors.light) || colors.light,
          '--color-purpledark-rgb': hexToRgb(colors.purpledark) || colors.purpledark,
          '--color-purplesemidark-rgb': hexToRgb(colors.purplesemidark) || colors.purplesemidark,
          '--color-purplesemilight-rgb': hexToRgb(colors.purplesemilight) || colors.purplesemilight,
          '--color-purplelight-rgb': hexToRgb(colors.purplelight) || colors.purplelight,
        },
      });
    },
  ],
};
