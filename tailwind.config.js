/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'twc-', // Prevent conflicts with Shopify styles
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
