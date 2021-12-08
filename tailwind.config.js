const defaultTheme = require("tailwindcss/defaultTheme");

const green = {
  primary: "#95BF47",
  secondary: "#B9DF74",
};
const blue = {
  focus: "#458FFF",
  primary: "#1134B1",
  secondary: "#17349C",
  sky: "#79DFFF",
  navy: "#183397",
};
const white = {
  DEFAULT: "#FFFFFF",
};
const ink = "#000000";
const gray = {
  DEFAULT: "#D2D5D9",
  1: "#3D3F40",
  2: "#8D9091",
  3: "#CCCCCC",
  4: "#212326",
  5: "#F4F4F4",
};
const red = {
  1: "#E96A4E",
  2: "#E73E4D",
};
const shopPayPurple = "#5A31F4";

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
      colors: {
        primary: green.primary,
        white,
        green,
        ink,
        gray,
        red,
        blue,
        "shop-pay-purple": shopPayPurple,
      },
      fontFamily: {
        title: ["Apfel Grotezk Bold"],
        primary: ["Apfel Grotezk"],
        paragraph: ["Apfel Grotezk"],
        shopfiysans: ["Shopify Sans"],
      },
      fontSize: {
        tn: ["9px", "12px"],
        xsm: ["12px", "16.8px"],
        sm: ["14px", "16.8px"],
        base: ["16px", "22.4px"],
        lg: ["20px", "23px"],
        xl: ["28px", "33.6px"],
        "2xl": ["42px", "42px"],
        "3xl": ["58px", "52.2px"],
        "4xl": ["80px", "75.2px"],
        "4_5xl": ["80px", "72px"],
        "5xl": ["120px", "108px"],
        mbase: ["16px", "20.8px"],
        mlg: ["18px", "26px"],
        mxl: ["22px", "26.4px"],
        m2xl: ["24px", "24px"],
        m3xl: ["28px", "33.6px"],
        m4xl: ["34px", "34px"],
        m5xl: ["42px", "37.8px"],
        m6xl: ["48px", "52px"],
        about: ["24px", "33.6px"],
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        "primary-start": blue.sky,
        "primary-end": blue.primary,
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: green.primary,
      }),
      backgroundImage: {
        "blob-image": "url('/src/assets/images/blob.png')",
        "blob-corner": "url('/src/assets/images/blobcorner2.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
