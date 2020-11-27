import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/login/login";

export const App = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  );
};

export default App;
