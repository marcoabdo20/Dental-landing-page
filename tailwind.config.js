/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A2B4B',
        'navy-deep': '#0E1A33',
        brand: '#2580C4',
        'brand-ink': '#1C6BA8',
        'brand-blue': '#2F68FF',
        sky: '#6ECBFF',
        lavender: '#C6B7FF',
        mist: '#F6F8FF',
        body: '#5A6B85',
        muted: '#7A8FAB',
        faint: '#8C9EBA',
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
