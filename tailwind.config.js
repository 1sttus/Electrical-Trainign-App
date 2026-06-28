/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#0066FF',
        navy: '#081B33',
        orange: '#FF8C00',
        emerald: '#00C853',
        glass: 'rgba(255,255,255,0.12)',
      },
      boxShadow: {
        glow: '0 25px 80px rgba(0, 102, 255, 0.16)',
      },
      backgroundImage: {
        'electrical-grid': 'radial-gradient(circle at top left, rgba(0,102,255,0.16), transparent 24%), radial-gradient(circle at bottom right, rgba(0,200,83,0.14), transparent 20%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
