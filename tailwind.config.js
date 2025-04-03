/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'urban-black': '#0A0A0A',
            'urban-grey': '#231F20',
            'urban-white': '#FFFFFF',
            'urban-orange': '#F47321',
            'urban-blue': '#1D42E1',
        },
    },
    plugins: [],
  }
  