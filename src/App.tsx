import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { DatosGenerales } from "./pages/datosGenerales/DatosGenerales";
import { LoginPage } from "./pages/login/login";
import { Questionnaire } from "./pages/Questionnaire/Questionnaire";
import { SignUp } from "./pages/signUp/signUp";
import { StudentHome } from "./pages/stundentHome/studentHome";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/datos-generales" exact component={DatosGenerales} />
        <Route path="/home" exact component={StudentHome} />
        <Route path="/cuestionario" exact component={Questionnaire} />
      </Switch>
    </>
  );
};

export default App;
