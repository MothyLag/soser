import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Index } from "./pages";
import { AdminHome } from "./pages/adminHome/adminHome";
import { AdminStudents } from "./pages/adminStudents/adminStudents";

import { DatosGenerales } from "./pages/datosGenerales/DatosGenerales";
import { DownloadFiles } from "./pages/downloadFiles/downloadFiles";
import { LoginPage } from "./pages/login/login";
import { ManageFiles } from "./pages/manageFiles/manageFiles";
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
        <Route path="/download-files" exact component={DownloadFiles} />
        <Route path="/admin" exact component={AdminHome} />
        <Route path="/admin-files" exact component={ManageFiles} />
        <Route path="/admin-alumnos" exact component={AdminStudents} />
      </Switch>
    </>
  );
};

export default App;
