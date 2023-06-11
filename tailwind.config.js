/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
