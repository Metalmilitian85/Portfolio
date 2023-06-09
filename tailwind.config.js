/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px'
      }
    },
  },
  plugins: [],
}

