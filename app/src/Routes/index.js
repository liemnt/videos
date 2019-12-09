import React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "../Page";

export default () => (
  <Switch>
    <Route path={"/"} component={Page} />
  </Switch>
);
