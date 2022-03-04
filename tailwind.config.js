const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.neutral,
        red: colors.red,
        primary: 'var(--vibe-primary)',
        secondary: 'var(--vibe-secondary)',
        neutral: 'var(--vibe-neutral)'
      }
    },
  },
  plugins: [],
}
