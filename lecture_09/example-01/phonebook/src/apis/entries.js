import axios from "axios";
import * as qs from "qs";

class EntriesApi {
  config = {
    baseURL: "http://localhost",
    port: 3001
  };
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${this.config.baseURL}:${this.config.port}`
    });
  }

  getEntries() {
    return this.httpClient
      .get("/users")
      .then(response =>
        response.data.map(item => this._mapResponseToEntry(item))
      );
  }

  getEntry(id) {
    return this.httpClient
      .get(`/users/${id}`)
      .then(response => this._mapResponseToEntry(response.data));
  }

  createEntry(entry) {
    const { name, email, phone } = entry;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const data = { name, email, phone };

    return this.httpClient
      .post(`/users`, qs.stringify(data), config)
      .then(response => this._mapResponseToEntry(response.data));
  }

  editEntry(entry) {
    const { id, name, email, phone } = entry;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const data = { name, email, phone };

    return this.httpClient
      .put(`/users/${id}`, qs.stringify(data), config)
      .then(response => this._mapResponseToEntry(response.data));
  }

  deleteEntry(id) {
    return this.httpClient.delete(`/users/${id}`);
  }

  _mapResponseToEntry(response) {
    return {
      id: response._id,
      name: response.name,
      email: response.email,
      phone: response.phone
    };
  }
}

export default new EntriesApi();
