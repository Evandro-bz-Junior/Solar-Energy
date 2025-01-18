/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: '#2B0F95', 
        amarelo: '#FFC116', 
        verde: '#079118', 
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Roboto como padrão para classes como `font-sans`
      },
    },
  },
  plugins: [],
}