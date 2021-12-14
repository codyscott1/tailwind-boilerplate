const figmaToTailwind = (fontColumns) => {
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

      return {
        [blob]: [
          `${fontSize}px`,
          {
            letterSpacing: `${letterSpacing}px`,
            lineHeight: `${lineHeightPx}px`,
          },
        ],
      };
    })
  );
  return styles.flat().reduce((obj, item) => Object.assign(obj, item), {});
};

const getTypography = (file) => {
  const styleguide = file.document.children.find(
    ({ name }) => name === "📐Styleguide"
  );

  const typography = styleguide.children
    .find(({ name }) => name === "Typography - Overview")
    .children.find(({ name }) => name === "Overview").children;

  return figmaToTailwind(typography);
};

module.exports = { getTypography };
