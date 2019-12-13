import React from "react";

import "./CreateEntry.css";
import entriesApi from "../../apis/entries";

class CreateEntry extends React.Component {
  state = { name: "", email: "", phone: "" };

  render() {
    return (
      <div className="create-entry">
        <h2>New entry</h2>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              onChange={this.onNameChange}
              value={this.state.name}
            ></input>
          </div>
          <div className="field">
            <label>Email address:</label>
            <input
              type="text"
              onChange={this.onEmailChange}
              value={this.state.email}
            ></input>
          </div>
          <div className="field">
            <label>Phone number:</label>
            <input
              type="text"
              onChange={this.onPhoneChange}
              value={this.state.phone}
            ></input>
          </div>
          <button className="ui button" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPhoneChange = event => {
    this.setState({ phone: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    entriesApi.createEntry({ name, email, phone }).then(() => {
      this.props.history.push("/");
    });
  };
}

export default CreateEntry;
