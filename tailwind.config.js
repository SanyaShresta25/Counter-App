/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ this is fine
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
