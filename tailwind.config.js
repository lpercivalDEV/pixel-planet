/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        'cy': '#00eeff',
        'rose': '#ff0e71',
        'flame': '#ff9c0e',
        'ultra': '#52489c',
        'space': '#2e4052',
        'light': '#FFF8E7',
      },
      spacing: {
        '8xl': '96rem',
        'mt-29': '7.2rem',
      },
    },
  },
  plugins: [],
}