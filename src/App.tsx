import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { LoginPage } from "./pages/login/login";
import { StudentHome } from "./pages/stundentHome/studentHome";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={StudentHome} />
      </Switch>
    </>
  );
};

export default App;
