/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'underline-color': '#ffffff', // or any color you prefer
      },
      scale: {
        '100': '1',
        '0': '0',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.after-underline': {
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: '0',
              bottom: '0',
              width: '100%',
              height: '2px',
              backgroundColor: 'var(--underline-color)',
              transform: 'scaleX(0)',
              transition: 'transform 0.3s ease',
            },
            '&:hover::after': {
              transform: 'scaleX(1)',
            },
          },
          '.after-underline-active': {
            '&::after': {
              transform: 'scaleX(1)',
            },
          },
        },
        ['responsive', 'hover', 'focus']
      );
    },
  ],
};
