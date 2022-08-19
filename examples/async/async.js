const fs = require("node:fs");

// try {
const files = fs.readdir(".", (err, files) => {
  if (err) {
    console.error("err", err);
    return;
  }
  console.log("files: ", files);
});

const content = fs.readFile(files[8], { encoding: "utf-8" }, (err, content) => {
  if (err) {
    console.error("err", err);
    return;
  }
  console.log("content: ", content);
});
console.log("coucou");
// } catch (err) {
//   console.error("err: ", err);
// }
