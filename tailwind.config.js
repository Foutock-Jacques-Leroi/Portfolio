/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],




  theme: {
    extend: {
      backgroundImage: {
        codeImg: "url('/7.jpg')",
        code1: "url('/reactCode.jpg')",
        code2: "url('/8.jpg')",
        code3: "url('/code2.jpg')",
        code4: "url('/S2.jpg')",


        blackOverlay: "linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
      },

    },
  },
  plugins: [],
}

