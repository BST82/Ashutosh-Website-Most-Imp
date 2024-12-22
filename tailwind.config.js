/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js" ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.725rem', // 10px
      },
    },
  },
  plugins: [],
}

