const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
  primary: "#A16D5F",
  secondary: "#788C94",
  tertiary: "#C1E0D8",
  ink: "#000000",
  subdued: "#666666",
  neutral: "#B8B8B8",
  light: "#F6F6F6",
  reverse: "#FFFFFF",
};

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false,
  variants: {
    extend: {},
  },
  theme: {
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
    extend: {
      colors,
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        "primary-start": colors.primary,
        "primary-end": colors.secondary,
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
