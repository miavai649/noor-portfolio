/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FACF0F',
          secondary: '#112A46',
          'base-100': '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')]
}
