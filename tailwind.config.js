/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        social: {
        
      "primary": "#0D1117",
              
      "secondary": "#161B22",
              
      "accent": "#1F2937",
              
      "neutral": "#3D4451",
              
      "base-100": "#FFFFFF",
              
      "info": "#DCF1F2",
              
      "success": "#36D399",
              
      "warning": "#FBBD23",
              
      "error": "#F87272",
              },
            },
          ],
        },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
