#!/usr/bin/node
const request = require('request');

const characterId = '18'; // Wedge antilles

const url = process.argv[2];

let count = 0;
request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1); // Exit with an error code
  } else {
    // Get body from json
    const data = JSON.parse(response.body);
    const movies = data.results;
    // Iterate every movie
    movies.forEach((movie) => {
      // Iterate every character on each movie
      movie.characters.forEach((character) => {
        // if character <https:link> has characterId
        if (character.includes(characterId)) {
          count += 1;
        }
      });
    });
    console.log(count);
  }
});
