/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Display"],
        karla: ["Karla"]
      },
      colors: {
        'heading': 'hsl(273, 4%, 51%)',
        'first-violet': 'hsl(256, 26%, 20%)',
        'background-footer': 'hsl(0, 0%, 98%)',
        'violet-burger': 'hsl(270, 9%, 17%)',
      }
    },
  },
  plugins: [],
}

