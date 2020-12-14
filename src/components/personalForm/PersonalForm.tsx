import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { PersonalFormWrapper } from "./personalForm.styles";

export const PersonalForm = () => {
  return (
    <div>
      <h1>Datos Personales</h1>
      <PersonalFormWrapper>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Nombre del alumno" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Genero del alumno" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Número de Teléfono" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Domicilio del alumno" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Edad del alumno" />
          </Grid>
        </Grid>
      </PersonalFormWrapper>
    </div>
  );
};
