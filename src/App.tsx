import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Index } from "./pages";

import { DatosGenerales } from "./pages/datosGenerales/DatosGenerales";
import { LoginPage } from "./pages/login/login";
import { Questionnaire } from "./pages/Questionnaire/Questionnaire";
import { Reports } from "./pages/Reportes/reportes";
import { SignUp } from "./pages/signUp/signUp";
import { StudentHome } from "./pages/stundentHome/studentHome";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/reportes" exact component={Reports} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/datos-generales" exact component={DatosGenerales} />
        <Route path="/home" exact component={StudentHome} />
        <Route path="/cuestionario" exact component={Questionnaire} />
      </Switch>
    </>
  );
};

export default App;
