import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { EscolarFormWrapper } from "./escolarForm.styles";

export const EscolarForm = () => {
  return (
    <div>
      <h1>Datos Escolares</h1>
      <EscolarFormWrapper>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Número de control" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Carrera del alumno" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Número de creditos" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="porcentaje de creditos" />
          </Grid>
        </Grid>
      </EscolarFormWrapper>
    </div>
  );
};
