import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home.jsx";
import PageNotFound from "./components/pagenotfound.jsx";

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
