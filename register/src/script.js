const fs = require('fs');

function registerUserToDatabase(user) {
  // Get the existing data from the database file
  let data = JSON.parse(fs.readFileSync('../../assets/static/usertest.json'));

  // Add the new user to the array of users
  data.users.push(user);

  // Write the updated data to the database file
  fs.writeFileSync('../../assets/static/usertest.json', JSON.stringify(data));
}

registerUserToDatabase({ name: 'John', age: 30 });