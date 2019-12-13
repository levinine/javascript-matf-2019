import React from "react";

import "./EditEntry.css";
import entriesApi from "../../apis/entries";

class EditEntry extends React.Component {
  state = { id: null, name: "", phone: "" };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id });
    this.fetchEntry(id);
  }

  render() {
    return this.state.id ? this.renderForm() : this.renderLoader();
  }

  renderForm = () => (
    <div className="edit-entry">
      <h2>Edit entry</h2>
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            onChange={this.onNameChange}
            value={this.state.name || ""}
          ></input>
        </div>
        <div className="field">
          <label>Email address:</label>
          <input
            type="text"
            onChange={this.onEmailChange}
            value={this.state.email || ""}
          ></input>
        </div>
        <div className="field">
          <label>Phone number:</label>
          <input
            type="text"
            onChange={this.onPhoneChange}
            value={this.state.phone || ""}
          ></input>
        </div>
        <button className="ui button" type="submit">
          Save
        </button>
      </form>
    </div>
  );

  renderLoader = () => <div>Loading...</div>;

  fetchEntry(id) {
    entriesApi.getEntry(id).then(entry => {
      this.setState({ ...entry });
    });
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

    const { id, name, email, phone } = this.state;

    entriesApi.editEntry({ id, name, email, phone }).then(() => {
      this.props.history.push(`/entries/${this.state.id}`);
    });
  };
}

export default EditEntry;
