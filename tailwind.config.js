/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
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
    },
  },
  plugins: [],
};