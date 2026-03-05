/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'pink': '#ed3e94',
          'purple': '#a855f7',
          'dark': '#0a0a0c',
          'card': '#16161d',
        }
      },
      backgroundImage: {
        'mesh': 'radial-gradient(circle at 50% -20%, rgba(237, 62, 148, 0.15), transparent 40%), radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.05), transparent 40%)',
      },
    },
  },
  plugins: [],
}
