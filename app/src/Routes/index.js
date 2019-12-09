import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "../views/ListPage";
import SharePage from "../views/SharePage";

export default () => (
  <Switch>
    <Route path={"/list"} component={ListPage} />
    <Route path={"/share"} component={SharePage} />
  </Switch>
);
