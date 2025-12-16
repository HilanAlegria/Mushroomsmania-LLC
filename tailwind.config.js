/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: "#39ff14",
        verdeHerbal: "#2ecc00",
        negroProfundo: "#080b0a",
        negroSuave: "#0e1110",
        marronChampi: "#8b6f47",
        marronOscuro: "#2a1f14",
      },
      boxShadow: {
        neon: "0 0 22px rgba(46, 204, 0, 0.6)",
        neonHover: "0 0 35px rgba(46, 204, 0, 0.85)",
        deep: "0 10px 35px rgba(0, 0, 0, 0.75)",
      },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
}
