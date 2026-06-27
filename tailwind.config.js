/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#0EA5E9',
        navy: '#020617',
        orange: '#F97316',
        emerald: '#10B981',
        glass: 'rgba(255,255,255,0.12)',
      },
      boxShadow: {
        glow: '0 25px 80px rgba(14, 165, 233, 0.16)',
      },
      backgroundImage: {
        'electrical-grid': 'radial-gradient(circle at top left, rgba(14,165,233,0.16), transparent 24%), radial-gradient(circle at bottom right, rgba(16,185,129,0.14), transparent 20%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
