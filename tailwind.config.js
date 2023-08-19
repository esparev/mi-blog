/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'theme-font': 'Epilogue, sans-serif',
        'deep-purple': '#661fff',
        'deep-purple-dark': '#220066',
        'charleston-green': '#22272d',
        'caribbean-green': '#1be8ae',
        'caribbean-green-dark': '#00bf89',
        'light-gray': '#cdd2da',
        'white': '#ffffff',
        'black': '#000000',
      },
    },
  },
  plugins: [],
};
