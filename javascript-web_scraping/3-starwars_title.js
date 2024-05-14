#!/usr/bin/node
const request = require('request');

// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request

const movieId = process.argv[2];

if (!movieId) {
  console.error('Error: Please provide an ID as an argument.');
  process.exit(1);
}

const urlBAse = 'https://swapi-api.hbtn.io/api/films/';
const url = urlBAse + movieId;

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1); // Exit with an error code
  } else {
    const data = JSON.parse(response.body);
    console.log(data.title);
  }
});
