const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  {
    "id": 1,
    "name": "Frodo Baggins",
    "email": "frodohasthering@lotr.com"
  },
  {
    "id": 2,
    "name": "Smeagol Gollum",
    "email": "myprecious@gmail.com"
  }
];

// get all resources in an array
app.get('/users', (request, response) => {
  response.send(users);
});

// get single resource by id
app.get('/users/:id', (request, response) => {
  let user = users.find(user => user.id === parseInt(request.params.id));
  response.send(user);
});

// create new resource
app.post('/users', (request, response) => {
  let requestBody = request.body;
  users.push({
    id: requestBody.id,
    name: requestBody.name,
    email: requestBody.email,
  });

  response.send('Success');
});

// edit single resource by id
app.put('/users/:id', (request, response) => {
  let requestUserId = parseInt(request.params.id);
  let requestBody = request.body;

  let userToUpdate = users.find(user => user.id === requestUserId);

  userToUpdate.name = requestBody.name;
  userToUpdate.email = requestBody.email;

  response.send(`Successfully updated user with id ${ requestUserId }!`);
});

// delete single resource by id
app.delete('/users/:id', (request, response) => {
  let userIdToDelete = parseInt(request.params.id);
  let userIndexToDelete = users.findIndex(user => user.id === userIdToDelete);

  users.splice(userIndexToDelete, 1);

  response.send(`Successfully deleted user with id ${ userIdToDelete }!`);
});

app.listen(port, () => console.log(`Server is listening on port ${ port }!`));
