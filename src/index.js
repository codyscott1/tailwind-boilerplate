const { getTypography } = require("./getTypographyDesigns");
const Figma = require("figma-api");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config({ path: ".env" });

const start = async () => {
  const file = await getFigmaDesigns();
  const typography = getTypography(file);

  generateTypography(typography);
};

start();

async function getFigmaDesigns() {
  const api = new Figma.Api({
    personalAccessToken: process.env.FIGMA_TOKEN,
  });

  return await api.getFile(process.env.FIGMA_FILE);
}

const generateTypography = (values) => {
  fs.writeFile(
    "typography.json",
    JSON.stringify({ theme: { fontSize: values } }, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};
