module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: "#333F48",
        baseyellow: "#C0CF13",
        baseblue: "#48A8C0",
        slate: "#f8fafc",
        bgleight: "#e8e8e8",
        bgdarkblue: "#002b33",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
