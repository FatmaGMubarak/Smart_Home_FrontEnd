const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
      customBlue1: '#021826',
      customBlue2: '#1F3D59',
      customBlue3: '#446173',
      customBlue4: '#63818C',
      customBlue5: '#B1C1B7',
      transparent: 'transparent',
      'blue-900': '#06507F',
      'blue-500': '#021826',
      'blue-700': '#1e40af',
    }
    },
  },
  plugins: [require("flowbite/plugin")],
}

