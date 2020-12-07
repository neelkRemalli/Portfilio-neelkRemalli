const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    fontFamily: {
      sans: '"Lato", sans-serif',
      serif: '"Alegreya", "Vollkorn", Georgia, Cambria, "Times New Roman", Times, serif'
  }, 
    extend: {
     
      // fontFamily: {
      //   // sans: [...defaultTheme.fontFamily.sans],
      //   sans: ["'Lato', sans-serif"],
      // },
    },
  },
  variants: {},
  plugins: [],
};
