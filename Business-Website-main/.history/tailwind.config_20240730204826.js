/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        'xsm': '300px', // Extra small devices (phones)
        'xxl': '1440px', // Extra large devices (desktops)
        'xxxl': '1920px', // Ultra large devices (large desktops)
      },
    },
  },
  plugins: [],
}
