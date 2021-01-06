import React from "react";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { EscolarFormWrapper } from "./escolarForm.styles";
import { useDispatch } from "react-redux";
import { useEscolarForm } from "./escolarForm.formik";
import { FootSteperButtons } from "../footSteperButtons/footSteperButtons";
import { DECREMENT_STEP } from "../../utils/actions";

export const EscolarForm = () => {
  const dispatch = useDispatch();
  const formik = useEscolarForm(dispatch);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Datos Escolares</h1>
      <EscolarFormWrapper>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Número de control"
              name="ctrlNumber"
              value={formik.values.ctrlNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.ctrlNumber !== undefined &&
                formik.touched.ctrlNumber
              }
              helperText={formik.errors.ctrlNumber}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <FormControl
              style={{ width: "100%" }}
              variant="outlined"
              error={
                formik.errors.career !== undefined && formik.touched.career
              }
            >
              <InputLabel id="student-gender-label">
                Carrera del alumno
              </InputLabel>
              <Select
                variant="outlined"
                label="Carrera del alumno"
                name="career"
                value={formik.values.career}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.career !== undefined && formik.touched.career
                }
              >
                <MenuItem value="ISC">
                  Ing. en Sistemas Computacionales
                </MenuItem>
                <MenuItem value="IGE">Ing. en Gestión Empresarial</MenuItem>
                <MenuItem value="II">Ing. Industrial</MenuItem>
              </Select>
              <FormHelperText>{formik.errors.career}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              type="number"
              variant="outlined"
              label="Número de creditos"
              name="creditsNumber"
              value={formik.values.creditsNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.creditsNumber !== undefined &&
                formik.touched.creditsNumber
              }
              helperText={formik.errors.creditsNumber}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              type="number"
              variant="outlined"
              label="porcentaje de creditos"
              name="creditsPercent"
              value={formik.values.creditsPercent}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.creditsPercent !== undefined &&
                formik.touched.creditsPercent
              }
              helperText={formik.errors.creditsPercent}
            />
          </Grid>
        </Grid>
      </EscolarFormWrapper>
      <FootSteperButtons onBack={() => dispatch({ type: DECREMENT_STEP })} />
    </form>
  );
};
