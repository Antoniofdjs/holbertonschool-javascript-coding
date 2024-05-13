#!/usr/bin/node
const fs = require("fs");

const filePath = process.argv[2];

// Check if a file path was provided as an argument
if (!filePath) {
  console.error("Usage: node 0-readme.js <file-path>");
  process.exit(1); // Exit with a non-zero status to indicate failure
}

// Read the content of the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
