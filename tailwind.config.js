/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: theme => ({
         'hero-pattern': "url('src/assets/bg.jpg')"
      })
    }
  },
}

