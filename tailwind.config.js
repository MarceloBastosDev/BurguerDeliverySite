/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './pages/**/*.html', // Inclui o arquivo HTML principal
    './style/**/*.css', // Inclui todos os arquivos CSS dentro da pasta style
    './script/**/*.{html,js}', // Inclui todos os arquivos HTML e JS dentro da pasta script
  ],
  
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

