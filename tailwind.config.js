/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gradient1: '#000000',
        gradient2: '#0A2647',
        gradient3: '#144272',
        gradient4: '#205295',
        dark: {
          bg: '#000000',
          text: '#ffffff'
        },
        light: {
          bg: '#F3F4F6',
          text:  '#111827',
        }
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

