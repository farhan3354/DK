/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom range for screens between 300px and 1100px
        'custom-range': { 'min': '300px', 'max': '1100px' },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.custom-range\:text-blue': {
          '@media (min-width: 300px) and (max-width: 1100px)': {
            color: '#3b82f6', // Tailwind's blue-500
          },
        },
        // Add more custom utilities if needed
      }

      addUtilities(newUtilities, ['responsive'])
    }
  ],
}
