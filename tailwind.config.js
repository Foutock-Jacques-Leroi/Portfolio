/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],




  theme: {
    extend: {
      backgroundImage: {
        codeImg: "url('../assets/7.jpg')",
        code: "url('../assets/reactCode.jpg')",
        

        blackOverlay: "linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
      },
      
    },
  },
  plugins: [],
}

