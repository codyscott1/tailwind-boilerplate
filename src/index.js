const { getTypography } = require("./getTypographyDesigns");
const Figma = require("figma-api");
const dotenv = require("dotenv");
const fs = require("fs");
const { ...existingConfig } = require("../tailwind.config.js");

dotenv.config({ path: ".env" });

const start = async () => {
  const file = await getFigmaDesigns();
  const typography = getTypography(file);

  overWriteExistingConfig(typography);
};

start();

async function getFigmaDesigns() {
  const api = new Figma.Api({
    personalAccessToken: process.env.FIGMA_TOKEN,
  });

  return await api.getFile(process.env.FIGMA_FILE);
}

const overWriteExistingConfig = (values) => {
  const newConfig = Object.assign({}, existingConfig, { theme: values });
  fs.writeFile("output.json", JSON.stringify(newConfig, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
