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
        primary: '#FFD73B',
        secondary: '#1a1a2e',
      },
      backgroundColor: {
        dark: '#1a1a2e',   // Background utama untuk dark mode
        light: '#ffffff',   // Background utama untuk light mode
      },
      textColor: {
        dark: '#e0e0e0',    // Warna teks untuk dark mode
        light: '#000000',    // Warna teks untuk light mode
      },
    },
  },
  darkMode: 'class', // Menggunakan class untuk mengaktifkan dark mode
  plugins: [
    typography,  // Menambahkan plugin typography dari Tailwind
  ],
};
