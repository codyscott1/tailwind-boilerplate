const figmaToTailwindConfig = (fontColumns) => {
  const styles = fontColumns.map((fontColumn) =>
    fontColumn.children.map((rows, i) => {
      const {
        characters,
        style: { fontSize, letterSpacing, lineHeightPx },
      } = rows.children[0];

      const mobilePrefix = i === 1 ? "mobile-" : "";
      const blob = `${mobilePrefix}${characters
        .toLowerCase()
        .replace(" ", "-")}`;
      if (letterSpacing) {
        return {
          [blob]: [
            `${round(fontSize)}px`,
            {
              letterSpacing: `${round(letterSpacing)}px`,
              lineHeight: `${round(lineHeightPx)}px`,
            },
          ],
        };
      } else {
        return {
          [blob]: [`${round(fontSize)}px`, `${round(lineHeightPx)}px`],
        };
      }
    })
  );
  return styles.flat().reduce((obj, item) => Object.assign(obj, item), {});
};

const figmaToCSS = (fontColumns) => {
  const styles = fontColumns.map((fontColumn) => {
    const firstColumn = fontColumn.children[0];
    const { characters, style } = firstColumn.children[0];
    const secondClampValue = fontColumn.children[1].children[0].style;

    const blob = `${characters.toLowerCase().replace(" ", "-")}`;
    const clamp = `font-size: clamp(${secondClampValue.fontSize}px, 4vw, ${style.fontSize}px)`;
    return `.${blob} {\r\n\t@apply text-mobile-${blob} sm:text-${blob};\r\n\t${clamp}\r\n}`;
  });

  return styles.join("\r\n");
};

const round = (x) => parseFloat(x.toFixed(2));

const getTypography = (file) => {
  const styleguide = file.document.children.find(
    ({ name }) => name === "📐Styleguide"
  );

  const typography = styleguide.children
    .find(({ name }) => name === "Typography - Overview")
    .children.find(({ name }) => name === "Overview").children;

  return {
    config: figmaToTailwindConfig(typography),
    css: figmaToCSS(typography),
  };
};

module.exports = { getTypography };
