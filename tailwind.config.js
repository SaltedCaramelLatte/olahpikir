import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Figtree', ...defaultTheme.fontFamily.sans],
        bossa: ['Bossa', 'Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          primary: '#FFD73B',
          secondary: '#1a1a2e',
          background: '#ffffff',
          text: '#333333',
          accent: '#FF6B6B',
          border: '#E0E0E0',
        },
        dark: {
          primary: '#FFD73B',
          secondary: '#F2F2F2',
          background: '#1a1a2e',
          text: '#e0e0e0',
          accent: '#FF6B6B',
          border: '#333333',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    typography,
  ],
};
