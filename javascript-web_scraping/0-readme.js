#!/usr/bin/node
const { readFile } = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Check if a file path was provided
if (!filePath) {
  console.error('Usage: node 0-readme.js <file-path>');
  process.exit(1); // Exit with a non-zero status to indicate failure
}

// Read the content of the file
readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Handle file not found error (ENOENT)
    if (err.code === 'ENOENT') {
      // Create custom error object with desired format
      const customError = new Error(
        `ENOENT: no such file or directory, open '${filePath}'`
      );
      customError.errno = -2;
      customError.code = 'ENOENT';
      customError.syscall = 'open';
      customError.path = filePath;

      // Output the custom error object
      console.error(customError);
    } else {
      console.error(err); // Handle other types of errors
    }
  } else {
    console.log(data); // Display file content if read successfully
  }
});
