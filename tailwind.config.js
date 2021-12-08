const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false,
  variants: {
    extend: {},
  },
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: "370px",
    },
    extend: {
      boxShadow: {
        DEFAULT: "6px 6px 30px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        xl: "3.5rem",
        25: "25px",
      },
      spacing: {
        xs: "2px",
        sm: "4px",
        med: "8px",
        base: "12px",
        lg: "16px",
        xl: "24px",
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "30px",
        6: "40px",
        98: "37rem",
        99: "44rem",
      },
      width: {
        hero: "600px",
      },
      strokeWidth: {
        3: "3",
        4: "4",
      },
      maxWidth: {
        cart: "486px",
        "1/3": "33.3%",
      },
      maxHeight: {
        100: "40rem",
      },
      gridTemplateColumns: {
        checkout: " 100px auto;",
      },
      colors: {},

      fontSize: {
        h1: [
          "64px",
          {
            letterSpacing: "-2px",
            lineHeight: "66px",
          },
        ],
        h2: [
          "48px",
          {
            letterSpacing: "-1px",
            lineHeight: "52px",
          },
        ],
        h3: [
          "40px",
          {
            letterSpacing: "-1px",
            lineHeight: "48px",
          },
        ],
        h4: ["32px", "48px"],
        h5: ["24px", "32px"],
        h6: ["16px", "20.8px"],
        "body-large": ["16px", "22px"],
        body: ["14px", "20px"],
        caption: ["12px", "18px"],
        "util-l": [
          "14px",
          {
            letterSpacing: "1px",
            lineHeight: "14px",
          },
        ],
        util: [
          "12px",
          {
            letterSpacing: "1px",
            lineHeight: "12px",
          },
        ],
        "m-h1": [
          "48px",
          {
            letterSpacing: "-1px",
            lineHeight: "50px",
          },
        ],
        "m-h2": [
          "38px",
          {
            letterSpacing: "-1px",
            lineHeight: "42px",
          },
        ],
        "m-h3": [
          "32px",
          {
            letterSpacing: "-1px",
            lineHeight: "36px",
          },
        ],
        "m-h4": ["24px", "32px"],
        "m-h5": ["18px", "24px"],
        "m-h6": ["14px", "19.6px"],
        "m-body-large": ["14px", "20px"],
        "m-body": ["12px", "20px"],
        "m-caption": ["12px", "18px"],
        "m-util-l": [
          "14px",
          {
            letterSpacing: "2px",
            lineHeight: "14px",
          },
        ],
        "m-util": [
          "12px",
          {
            letterSpacing: "1px",
            lineHeight: "12px",
          },
        ],
      },
      //   gradientColorStops: (theme) => ({
      //     ...theme("colors"),
      //     "primary-start": blue.sky,
      //     "primary-end": blue.primary,
      //   }),
      //   backgroundColor: (theme) => ({
      //     ...theme("colors"),
      //     primary: green.primary,
      //   }),
      backgroundImage: {
        "blob-image": "url('/src/assets/images/blob.png')",
        "blob-corner": "url('/src/assets/images/blobcorner2.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
