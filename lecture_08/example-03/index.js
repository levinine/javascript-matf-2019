const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./controllers/UsersController');

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

UsersController.registerRoutes(app);

app.listen(port, () => console.log(`API is listening on port ${ port }!`));
