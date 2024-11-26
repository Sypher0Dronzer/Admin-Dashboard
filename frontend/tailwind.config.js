/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      montserrat: ["Montserrat", "sans-serif"],
      rubik: ['Rubik', 'sans-serif'],
    },},
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'], // Optional: Add rounded scrollbar support
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
}

