// import { nextui } from '@nextui-org/react'
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

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
          primary: '#A65E2E', // Cokelat biji kopi untuk warna utama
          secondary: '#DDB892', // Warna krem atau beige untuk elemen sekunder
          background: '#F3EDE2', // Warna latar belakang terang, krem
          text: '#5D4037', // Cokelat gelap untuk teks pada latar terang
          accent: '#C59B6D', // Warna aksen yang lebih lembut
          border: '#E0D3C1', // Warna border yang lembut
        },
        dark: {
          primary: '#DDB892', // Krem sebagai warna utama pada mode gelap
          secondary: '#A65E2E', // Cokelat sebagai warna sekunder pada mode gelap
          background: '#3E2723', // Cokelat gelap atau hitam legam sebagai latar belakang gelap
          text: '#E8D5B7', // Warna krem terang untuk teks pada latar gelap
          accent: '#C59B6D', // Warna aksen yang lebih lembut
          border: '#5D4037', // Warna border yang lebih gelap pada mode gelap
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    typography,
  ],
};
