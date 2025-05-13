/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gideon': ['Gideon Roman', 'serif'], // Custom Gideon Roman font
      },
      keyframes: {
        slowFadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slowFadeIn2: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slowFadeIn3: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slowFadeIn4: {
          '0%': { opacity: 0,},
          '100%': { opacity: 1, },
          },
      },
      animation: {
        slowFadeIn: 'slowFadeIn 2s ease-in-out forwards',
        slowFadeIn2: 'slowFadeIn2 2s ease-in-out forwards',
        slowFadeIn3: 'slowFadeIn3 1s ease-in-out forwards ',
        slowFadeIn4: 'slowFadeIn4 1s ease-in-out forwards ',
        // Slow fade-in animation
      }
    },
  },
  plugins: [],
}
