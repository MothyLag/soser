import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { CompanyFormWrapper } from "./companyForm.styles";

export const CompannyForm = () => {
  return (
    <div>
      <h1>Datos Personales</h1>
      <CompanyFormWrapper>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Nombre de la empresa" />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField variant="outlined" label="Ubicación" />
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
      </CompanyFormWrapper>
    </div>
  );
};
