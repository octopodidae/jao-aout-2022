// const fs = require("node:fs").promises;
import { promises as fs } from "fs";

try {
  const files = await fs.readdir(".");
  console.log("files: ", files);

  const content = await fs.readFile(files[6], { encoding: "utf-8" });
  console.log("content: ", content);
} catch (err) {
  console.error("err: ", err);
}
