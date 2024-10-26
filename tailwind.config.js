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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '#2d3748', // Dark background for code blocks
              color: '#edf2f7', // Light text color
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto'
            },
            code: {
              backgroundColor: '#f7f7f7', // Light gray for inline code
              color: '#e53e3e', // Highlight color for inline code
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontFamily: 'monospace'
            }
          }
        }
      }
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')]
}
