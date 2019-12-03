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

// drop all previous data in the table
db.container.drop();

for (let user of users)
  db.container.insert(user);
