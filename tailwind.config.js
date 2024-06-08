/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#A9D681",
        secondaryColor: "",
        transparentbackground: "rgb(3, 50, 50, 0.9)",
        transparentbackground2: "rgb(3, 50, 50, 0.5)",
        bgtextColor: "#F4F4FC",
      },
      keyframes: {
        'move-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' },
        },
      },
      animation: {
        'move-up-down': 'move-up-down 3s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}
