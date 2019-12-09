import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "../views/ListPage";
import SharePage from "../views/SharePage";

export default () => (
  <Switch>
    <Route path={"/"} exact component={ListPage} />
    <Route path={"/share"} exact component={SharePage} />
  </Switch>
);
