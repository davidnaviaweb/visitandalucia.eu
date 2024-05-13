/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        puertoRico: {
          '50': '#f2fbf8',
          '100': '#d3f4ea',
          '200': '#a6e9d6',
          '300': '#5cd0b3',
          '400': '#45bca2',
          '500': '#2ba189',
          '600': '#20816f',
          '700': '#1e675b',
          '800': '#1c534b',
          '900': '#1b463f',
          '950': '#0a2925',
        },
        salem: {
          '50': '#ecfff4',
          '100': '#d3ffe6',
          '200': '#aaffce',
          '300': '#69ffaa',
          '400': '#21ff7d',
          '500': '#00f25b',
          '600': '#00ca48',
          '700': '#009e3b',
          '800': '#007a33',
          '900': '#02652d',
          '950': '#003916',
        },
      },
      fontFamily: {
        rale: ['Raleway'],
        poetsen: ['Poetsen One'],
      },
    },
  },
  plugins: [],
}

