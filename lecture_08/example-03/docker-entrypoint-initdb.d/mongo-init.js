let users = [
  {
    "id": 1,
    "name": "Frodo Baggins",
    "email": "frodohasthering@lotr.com",
    "phone": "00000000001"
  },
  {
    "id": 2,
    "name": "Smeagol Gollum",
    "email": "myprecious@gmail.com",
    "phone": "00000000002"
  }
];

db.createCollection('users');
const usersCollection = db.getCollection('users');

for (let user of users)
  usersCollection.insert(user);
