import React from "react";
import { Route, Switch } from "react-router-dom";
import Test from "./Test";

export default () => (
  <Switch>
    <Route path={"/"} component={Test} />
  </Switch>
);
