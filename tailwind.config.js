/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        l4rgDark: "#001731",
        l4rgBlue: "#00426F",
        l4rgCyan: "#0D76B1",
        // seen in bg-gray-50 section
      },
      backgroundImage: {
        "gradient-l4rg": "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)",
      },
    },
  },
  plugins: [],
};
