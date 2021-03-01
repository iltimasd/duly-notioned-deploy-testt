const { readFileSync } = require("fs");
const { join } = require("path");
const file = readFileSync(join(__dirname, "_files", "index.html"), "utf8");

module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(file);
};
