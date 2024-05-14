#!/usr/bin/node
const request = require('request');

// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request

const url = process.argv[2];

if (!url) {
  console.error('Error: Please provide a url as an argument.');
  process.exit(1);
}

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1); // Exit with an error code
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
