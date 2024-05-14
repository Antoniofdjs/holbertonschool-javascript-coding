#!/usr/bin/node
const request = require("request");
const url = process.argv[2];
const completedUsers = {};

request(url, (error, response) => {
  if (error) {
    console.error("Error:", error.message);
    process.exit(1); // Exit with an error code
  } else {
    // get the body that has <p> tags and is not JSON...
    const users = JSON.parse(response.body);
    users.forEach((user) => {
      // Get values for user id and task(true or false)
      const userId = user.userId;
      const taskDone = user.completed;
      // If User exists and task is done, add +1 to value
      if (userId in completedUsers && taskDone === true) {
        completedUsers[`${userId}`] += 1;
      } else {
        if (taskDone === true) {
          completedUsers[`${userId}`] = 1;
        }
      }
    });
    console.log(completedUsers);
  }
});
