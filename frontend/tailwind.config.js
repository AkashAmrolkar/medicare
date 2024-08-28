/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E82FD', // Custom primary color
      },
    },
    container: {
      center: true, // Centers the container by applying auto margins
      padding: '2rem', // Adds padding inside the container
      maxWidth: '85%', // Custom max-width of 85%
    },
  },
  plugins: [],
}

