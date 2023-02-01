/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

   
    extend: {

   
     backgroundImage:{

      
      'hero':"url('../assets/images/hero.jpg')",   
  
     },

    
    },
  },
  plugins: [],
}



