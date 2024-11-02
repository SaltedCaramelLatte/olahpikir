import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|tabs|ripple|spinner).js",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Figtree', ...defaultTheme.fontFamily.sans],
        bossa: ['Bossa', 'Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          primary: '#A65E2E',
          secondary: '#DDB892',
          background: '#F3EDE2',
          text: '#5D4037',
          accent: '#C59B6D',
          border: '#E0D3C1',
        },
        dark: {
          primary: '#DDB892',
          secondary: '#A65E2E',
          background: '#3E2723',
          text: '#E8D5B7',
          accent: '#C59B6D',
          border: '#5D4037',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    typography,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-light': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-dark': {
          textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)',
        },
        // '.overflow-ellipsis': {
        //   overflow: 'hidden',
        //   textOverflow: 'ellipsis',
        //   whiteSpace: 'nowrap',
        // },
        '.hide-scrollbar': {

          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          overflowX: 'hidden',
        },
      });
    }),
  ],
};
