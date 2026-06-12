/** @type {import('tailwindcss').Config} */
export default {
  // --- TAMBAHKAN BARIS INI ---
  darkMode: "class",
  // ---------------------------
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      colors: {
        // Mode Terang Default
        background: "#050505", // Background Putih Bersih
        text: "#000000", // Teks Hitam Pekat
        primary: {
          DEFAULT: "#DC2626", // Merah Crimson
          dark: "#991B1B",
        },
        accent: {
          DEFAULT: "#ffffff", // Aksen Putih untuk Dark Mode
          dark: "#000000", // Aksen Hitam untuk Light Mode
        },
      },
    },
  },
  plugins: [],
};
