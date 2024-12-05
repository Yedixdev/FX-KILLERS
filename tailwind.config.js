/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Colores verdes
        green1: "#135A3A", //verde claro
        green2: "#012b20", //verde oscuro
        gray1: "#EAEAEA", //gris del fondo
        yellow1: "#EAB642", //amarillo para algunos botones
        beige1: "#C7A17C", //Marron letras
        beige2: "#EFDAB8", //Marron claro para botones
      },
      //Color Gradiante para los fondos, bg-gradiant-green
      backgroundImage: {
        "gradient-green": "linear-gradient(90deg, #197149, #012b20)",
      },
      //Esta tipografia son las que vamos a usar bro
      fontFamily: {
        display: ['"Playfair Display"', "serif"], //creo que no va pero ahi miramos si queda bien
        robo: ["Roboto", "sans-serif"], //font-robo para titulos
        poppins: ["Poppins", "sans-serif"], //font-poppins para cuerpo de texto(parrafos)
      },
    },
  },
  plugins: [],
};
