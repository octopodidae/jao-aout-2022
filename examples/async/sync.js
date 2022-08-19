const fs = require("node:fs");

try {
  const files = fs.readdirSync(".");
  console.log("files: ", files);

  const content = fs.readFileSync(files[6], { encoding: "utf-8" });
  console.log("content: ", content);
} catch (err) {
  console.error("err: ", err);
}
