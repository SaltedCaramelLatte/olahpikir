import { nextui } from '@nextui-org/theme';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|table|tabs|ripple|spinner|checkbox|spacer|input).js"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Figtree', ...defaultTheme.fontFamily.sans],
        bossa: ['Bossa', 'Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          primary: '#FF3B30',     // Merah lebih soft (tetap mencolok, tapi lebih lembut)
          secondary: '#FFFFFF',   // Putih bersih, tetap fresh
          background: '#F4F4F4',  // Abu-abu sangat terang (lebih lembut dari putih)
          text: '#2C2C2C',         // Hitam sedikit pudar, memberikan kesan elegan dan soft
          accent: '#FF7043',      // Oranye lembut untuk aksen yang hangat
          border: '#DADADA',      // Abu-abu lebih lembut untuk border
          danger: '#D32F2F',      // Merah yang kuat untuk peringatan
          warning: '#FFB300',     // Kuning yang lebih hangat, tidak terlalu terang
        },
        dark: {
          primary: '#FF3B30',        // Merah lebih lembut dan tetap mencolok
          secondary: '#1C1C1C',      // Hitam lebih soft dan lebih modern
          background: '#121212',     // Latar belakang lebih gelap dan bersih
          text: '#E5E5E5',            // Teks abu-abu terang untuk kenyamanan mata
          accent: '#FF7043',          // Oranye lembut sebagai aksen hangat
          border: '#333333',          // Border gelap dan lebih netral
          danger: '#D32F2F',          // Merah tegas untuk peringatan yang kuat
          warning: '#FFB300',         // Kuning hangat yang memberi kesan serius
        },

      }
    },
  },
  darkMode: 'class',
  plugins: [typography, plugin(function ({ addUtilities }) {
    addUtilities({
      '.text-shadow-light': {
        textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
      },
      '.text-shadow-dark': {
        textShadow: '1px 1px 2px rgba(255,255,255,0.3)',
      },
      '.overflow-ellipsis': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      '.hide-scrollbar': {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        'overflowX': 'hidden',
      },
    });
  }), nextui()],
};
