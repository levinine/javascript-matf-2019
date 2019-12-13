import React from "react";
import { Link } from "react-router-dom";

import "./EntryItem.css";

const EntryItem = props => (
  <div className="entry-item">
    <div className="ui card">
      <div className="content">
        <div className="header">
          {props.entry.name} - {props.entry.phone}
        </div>
      </div>
      <div className="extra content">
        <Link to={`/entries/${props.entry.id}`}>
          <button className="ui button">Details</button>
        </Link>
        <button
          className="ui button"
          onClick={() => props.deleteEntry(props.entry.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default EntryItem;
