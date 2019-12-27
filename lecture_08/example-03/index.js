const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./app/controllers/UsersController');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use(cors());

UsersController.registerRoutes(app);

app.listen(port, () => console.log(`API is listening on port ${ port }!`));
