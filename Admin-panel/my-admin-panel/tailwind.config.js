// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Specify the paths to your content files
  ],
  theme: {
    extend: {
      animation: {
        'rocket-movement': 'rocket-movement 200s linear infinite',
        'spin-earth': 'spin-earth 20s linear infinite',
        'move-astronaut': 'move-astronaut 50s linear infinite',
        'rotate-astronaut': 'rotate-astronaut 200s linear infinite',
        'glow-star': 'glow-star 2s ease-in-out infinite',
      },
      keyframes: {
        'rocket-movement': {
          '100%': {
            transform: 'translate(1200px, -600px)',
          },
        },
        'spin-earth': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        'move-astronaut': {
          '100%': {
            transform: 'translate(-160px, -160px)',
          },
        },
        'rotate-astronaut': {
          '100%': {
            transform: 'rotate(-720deg)',
          },
        },
        'glow-star': {
          '40%': {
            opacity: '0.3',
          },
          '90%, 100%': {
            opacity: '1',
            transform: 'scale(1.2)',
            borderRadius: '9999px',
          },
        },
      },
    },
  },
  plugins: [],
}
