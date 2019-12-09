import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "../views/ListPage";

export default () => (
  <Switch>
    <Route path={"/list"} component={ListPage} />
  </Switch>
);
