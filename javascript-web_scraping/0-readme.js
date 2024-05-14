#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: Please provide a file path as an argument.');
  process.exit(1);
}

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // Convert error object to a more informative JSON-like format
    console.error({
      error: err
    });
  } else {
    console.log(data);
  }
});
