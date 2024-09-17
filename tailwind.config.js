/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple' : '#4B0097',
        'main' : '#F6F4F8',
        'ligth-gray' : '#959292',
        'medium-gray' : '#696666',
        'dark-gray': '#1c1e23', 
        'ligth-purple' :'#E6E0EB' 
      }
    },
  },
  plugins: [],
}

