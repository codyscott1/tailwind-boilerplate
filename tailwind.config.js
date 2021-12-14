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
      "heading-1": ["99px", { letterSpacing: "-2px", lineHeight: "66px" }],
      "mobile-heading-1": [
        "48px",
        { letterSpacing: "-1px", lineHeight: "50px" },
      ],
      "heading-2": ["48px", { letterSpacing: "-1px", lineHeight: "52px" }],
      "mobile-heading-2": [
        "38px",
        { letterSpacing: "-1px", lineHeight: "42px" },
      ],
      "heading-3": ["40px", { letterSpacing: "-1px", lineHeight: "48px" }],
      "mobile-heading-3": [
        "32px",
        { letterSpacing: "-1px", lineHeight: "36px" },
      ],
      "heading-4": ["32px", { letterSpacing: "0px", lineHeight: "48px" }],
      "mobile-heading-4": [
        "24px",
        { letterSpacing: "0px", lineHeight: "32px" },
      ],
      "heading-5": ["24px", { letterSpacing: "0px", lineHeight: "32px" }],
      "mobile-heading-5": [
        "18px",
        { letterSpacing: "0px", lineHeight: "24px" },
      ],
      "heading-6": [
        "16px",
        { letterSpacing: "0px", lineHeight: "20.799999237060547px" },
      ],
      "mobile-heading-6": [
        "14px",
        { letterSpacing: "0px", lineHeight: "19.600000381469727px" },
      ],
      "body-large": ["16px", { letterSpacing: "0px", lineHeight: "22px" }],
      "mobile-body-large": [
        "14px",
        { letterSpacing: "0px", lineHeight: "20px" },
      ],
      body: ["14px", { letterSpacing: "0px", lineHeight: "20px" }],
      "mobile-body": ["12px", { letterSpacing: "0px", lineHeight: "20px" }],
      caption: ["12px", { letterSpacing: "0px", lineHeight: "18px" }],
      "mobile-caption": ["12px", { letterSpacing: "0px", lineHeight: "18px" }],
      "utility-large": ["14px", { letterSpacing: "1px", lineHeight: "14px" }],
      "mobile-utility-large": [
        "14px",
        { letterSpacing: "2px", lineHeight: "14px" },
      ],
      utility: ["12px", { letterSpacing: "1px", lineHeight: "12px" }],
      "mobile-utility": ["12px", { letterSpacing: "1px", lineHeight: "12px" }],
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
