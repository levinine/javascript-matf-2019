import React from "react";
import { Link } from "react-router-dom";

import "./EntryDetails.css";
import entriesApi from "../../apis/entries";

class EntryDetails extends React.Component {
  state = { id: null, name: "", email: "", phone: "", loaded: false };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id });
    this.fetchEntry(id);
  }

  render() {
    return this.state.loaded ? this.renderDetails() : this.renderLoader();
  }

  renderDetails = () => (
    <div className="entry-details">
      <div className="ui card">
        <div className="content">
          <div className="header">Details</div>
          <h4 className="summary">Name: {this.state.name}</h4>
          <h4 className="summary">Email address: {this.state.email}</h4>
          <h4 className="summary">Phone number: {this.state.phone}</h4>
        </div>
        <div className="extra content">
          <Link to={`/entries/${this.state.id}/edit`}>
            <button className="ui button">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );

  renderLoader = () => <div>Loading...</div>;

  fetchEntry(id) {
    entriesApi
      .getEntry(id)
      .then(entry => this.setState({ ...entry, loaded: true }));
  }
}

export default EntryDetails;
