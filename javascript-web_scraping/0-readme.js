#!/usr/bin/node
const fs = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];
if (!filePath) {
  console.log('Error: Please provide a file path as an argument.');
  process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log({ error: err });
  } else {
    console.log(data);
  }
});
