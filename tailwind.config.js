module.exports = {
  purge: [
    './app/**/*/*.html.erb',
    './app/helpers/**/*/*.rb',
    './app/javascript/**/*/*.js',
    './app/javascript/**/*/*.vue',
    './app/javascript/**/*/*.react'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
