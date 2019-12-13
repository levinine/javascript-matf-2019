import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import MenuBar from "../MenuBar";
import EntryList from "../EntryList";
import EntryDetails from "../EntryDetails";
import CreateEntry from "../CreateEntry";
import EditEntry from "../EditEntry/EditEntry";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <div>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={EntryList} />
          <Route exact path="/entries/new" component={CreateEntry} />
          <Route exact path="/entries/:id" component={EntryDetails} />
          <Route exact path="/entries/:id/edit" component={EditEntry} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
