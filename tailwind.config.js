/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#00C878",
        loginColor:"#46BDD1",
        labelColor:"#A1272B",
        white:"#fff"
      },
      fontFamily:{
        montepasifico:[ "Pacifico", "cursive"],

      },
      fontSize:{
        label:["18px",{
          lineHeight:"2rem",
          fontWeight:"400"
        }]
      },
      boxShadow:{
        login:"5xp 5px 10px 5px rgba(0,0,0,0.5)",
      }



    },
  },
  plugins: [],
}