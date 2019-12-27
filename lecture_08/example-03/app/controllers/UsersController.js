const util = require('util');
const MongoDBService = require('../services/MongoDBService');
const ObjectId = require('mongodb').ObjectID;
class UsersController {
  constructor(request, response) {
    this.request = request;
    this.response = response;

    this.mongoDBService = new MongoDBService('mongodb://root:example@localhost:27017',
      'matf_lecture_08_example_03');
  }

  static registerRoutes(app) {
    app.get('/users', (request, response) => {
      new UsersController(request, response).getUsers();
    });

    app.get('/users/:id', (request, response) => {
      new UsersController(request, response).getUser();
    });

    app.post('/users', (request, response) => {
      new UsersController(request, response).postUsers();
    });

    app.put('/users/:id', (request, response) => {
      new UsersController(request, response).putUser();
    });

    app.delete('/users/:id', (request, response) => {
      new UsersController(request, response).deleteUser();
    });
  }

  async getUsers() {
    await this.mongoDBService.connect();

    let users = await this.mongoDBService.find('users');

    this.mongoDBService.disconnect();
    this.response.send(users);
  }

  async getUser() {
    await this.mongoDBService.connect();

    let user = await this.mongoDBService.findOne('users', { _id: ObjectId(this.request.params.id) });

    this.mongoDBService.disconnect();
    this.response.send(user);
  }

  async postUsers() {
    await this.mongoDBService.connect();

    await this.mongoDBService.insert('users', {
      name: this.request.body.name,
      email: this.request.body.email,
      phone: this.request.body.phone
    });

    this.mongoDBService.disconnect();
    this.response.json({ status: 'Success' });
  }

  async putUser() {
    await this.mongoDBService.connect();

    await this.mongoDBService.update('users', { _id: ObjectId(this.request.params.id) }, {
      name: this.request.body.name,
      email: this.request.body.email,
      phone: this.request.body.phone
    });

    this.mongoDBService.disconnect();
    this.response.json({ status: 'Success' });
  }

  async deleteUser() {
    await this.mongoDBService.connect();
    await this.mongoDBService.delete('users', { _id: ObjectId(this.request.params.id) } );

    this.mongoDBService.disconnect();
    this.response.json({ status: 'Success' });
  }
}

module.exports = UsersController;
