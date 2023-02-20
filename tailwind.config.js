module.exports = {
  content: [
    "./src/*.{js,jsx}",
    "./src/**/*.{js, jsx}"
  ],
  theme: {
    screens: {
      // sm: '480px',
      md: '1000px',
      lg: '1080px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'white': '#fffff0',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'darktrees': "url('../public/background_dark.png')",
        'darkyellowtrees': "url('../public/background_dark_yellow.png')",
        'trees': "url('../public/background.png')",
      },
    }
  },
  plugins: [],
}
