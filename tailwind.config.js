module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          // Light theme
          lightGray: 'hsl(0, 0%, 98%)',
          grayishBlue: {
            100: 'hsl(236, 33%, 92%)',
            200: 'hsl(233, 11%, 84%)',
            500: 'hsl(236, 9%, 61%)',
            600: 'hsl(235, 19%, 35%)',
          },
        },
        dark: {
          //Dark theme
          darkBlue: {
            100: 'hsl(235, 21%, 11%)',
            200: 'hsl(235, 24%, 19%)',
          },
          grayishBlue: {
            100: 'hsl(234, 39%, 85%)',
            400: 'hsl(234, 11%, 52%)',
            500: 'hsl(233, 14%, 35%)',
            600: 'hsl(237, 14%, 26%)',

            // Hover
            200: 'hsl(236, 33%, 92%)',
          },
        },
      },
    },
    screens: {
      md: '600px',
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
