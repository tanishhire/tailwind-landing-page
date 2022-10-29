// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
         poppins: ['Poppins'],
      }
      },
    screens : {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    extend: {
      colors : {
        darkBlue: 'hsl(228, 39%, 23%)',
        celestialBlue : 'hsl(206, 61%, 56%)',
        blueJeans: 'hsl(195, 74%, 62%)',
        middleBlueGreen: 'hsl(181, 43%, 67%)',
        seaFoamGreen: 'hsl(158, 38%, 74%)',
        jetStream: 'hsl(144, 35%, 80%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
