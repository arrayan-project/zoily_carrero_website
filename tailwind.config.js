/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'mr-de-haviland': ['"Mr De Haviland"', 'cursive'], // Nombre de la familia de la fuente
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'], // Nombre de la familia de la fuente
        roboto: ['Roboto', 'sans-serif'], // Nombre de la familia de la fuente
      },
      blur: { // Extender la configuración de 'blur' de Tailwind
        'xs': '2px',  // Desenfoque extra sutil (2px)
        'sm': '5px',  // Desenfoque sutil (5px) - puedes ajustar estos valores
        'md': '10px', // Desenfoque medio (10px)
        'lg': '15px', // Desenfoque grande (15px)
        'xl': '20px', // Desenfoque extra grande (20px)
        '2xl': '25px',// Desenfoque aún mayor
        '3xl': '30px',// Desenfoque máximo
      },
      screens: {
        'sm': '640px', // <-- Verifica la definición del breakpoint 'sm'
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};