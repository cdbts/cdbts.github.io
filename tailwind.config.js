const { colors: { teal, orange, yellow, indigo, purple, pink, red, green, blue, ...colors } } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors,
    extend: {
      colors: {
        primary: '#303B43'
      },
      fontFamily: {
        'sans': ['Titillium Web']
      }
    },
  },
  variants: {},
  plugins: [],
}
