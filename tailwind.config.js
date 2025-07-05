/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",        // used as bg-dark
        accent: "#3b82f6",      // can be used as text-accent
        neon: "#00ffff",        // can be used as border-neon
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
