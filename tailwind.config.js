module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        min1: "-1",
        0: 0,
        10: "10",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        1240: "1240px",
        900: "900px",
        700: "700px",
        500: "500px",
        138: "138px",
      },
      minHeight: {
        400: "400px",
      },
      maxHeight: {
        0: "0px",
        1240: "1240px",
        500: "500px",
        138: "138px",
      },
      height: {
        6: "1.5rem",
        10: "2.5rem",
        20: "5rem",
      },
    },
  },
  variants: {},
  plugins: [],
  media: false,
};
