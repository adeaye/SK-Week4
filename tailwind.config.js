/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*/.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: '#f97316', // Warna orange
          textGray: '#6b7280', // Warna abu-abu untuk teks
          lightGray: '#f3f4f6', // Background ringan
        },
      },
    },
    plugins: [],
  };