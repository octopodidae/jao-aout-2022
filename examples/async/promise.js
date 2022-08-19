const fs = require("node:fs");
const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

const readFile = (...args) => {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return readFile(files[6], { encoding: "utf8" });
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
