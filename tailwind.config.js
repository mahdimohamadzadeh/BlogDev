module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      "very-light-blue": "#aefeff",
      "light-blue": "#4FBDBA",
      "medium-blue": "#35858B",
      "dark-blue": "#072227",
      "main-background": "#EEFBFC",
      border: "#0C9DA8",
      input: "#D3F6FA",
      info: "#2094f3",
      success: "#009485",
      warning: "#ff9900",
      error: "#ff5724",
    },
    fontFamily: {
      body: ["Shabnam"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {},
};
