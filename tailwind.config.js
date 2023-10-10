/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C6C09C',
        secondary: '#E79796',
        container:'#F5CEC7',
        tertiary:'#FFB284',
        four:'#FFC98B',
        welcome: '#FFE9CF',
        workshop: '#DC6620',
        integrate: '#CD9351', 
        tutorial: '#827E6A',
      },
      fontFamily: {
        'chilanka': ['Chilanka', 'cursive'],
        'could' : ['"Nothing You Could Do"', 'cursive']
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')],
}

