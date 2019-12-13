import React from "react";
import { Link } from "react-router-dom";

import "./MenuBar.css";

const MenuBar = () => (
  <div className="menu-bar">
    <img className="logo" src="logo.png" alt="logo"></img>
    <ul className="menu-list">
      <li className="menu-list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-list-item">
        <Link to="/entries/new">Create</Link>
      </li>
    </ul>
  </div>
);

export default MenuBar;
