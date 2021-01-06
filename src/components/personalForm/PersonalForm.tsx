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
import { PersonalFormWrapper } from "./personalForm.styles";
import { useDispatch } from "react-redux";
import { usePersonalForm } from "./personalForm.formik";
import { FootSteperButtons } from "../footSteperButtons/footSteperButtons";

export const PersonalForm = () => {
  const dispatch = useDispatch();
  const formik = usePersonalForm(dispatch);

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Datos Personales</h1>
      <PersonalFormWrapper>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Nombre del alumno"
              name="studentName"
              error={
                formik.errors.studentName !== undefined &&
                formik.touched.studentName
              }
              helperText={
                formik.touched.studentName ? formik.errors.studentName : ""
              }
              value={formik.values.studentName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <FormControl
              variant="outlined"
              style={{ width: "100%" }}
              error={
                formik.errors.studentGender !== undefined &&
                formik.touched.studentGender
              }
            >
              <InputLabel id="student-gender-label">
                Genero del alumno
              </InputLabel>
              <Select
                labelId="student-gender-label"
                name="studentGender"
                label="Genero del alumno"
                error={
                  formik.errors.studentGender !== undefined &&
                  formik.touched.studentGender
                }
                value={formik.values.studentGender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="Masc">Masculino</MenuItem>
                <MenuItem value="Fem">Femenino</MenuItem>
              </Select>
              {formik.touched.studentGender && (
                <FormHelperText>{formik.errors.studentGender}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              type="phone"
              variant="outlined"
              label="Número de Teléfono"
              name="studentPhone"
              error={
                formik.errors.studentPhone !== undefined &&
                formik.touched.studentPhone
              }
              helperText={
                formik.touched.studentPhone ? formik.errors.studentPhone : ""
              }
              value={formik.values.studentPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Domicilio del alumno"
              name="studentAddress"
              error={
                formik.errors.studentAddress !== undefined &&
                formik.touched.studentAddress
              }
              helperText={
                formik.touched.studentAddress
                  ? formik.errors.studentAddress
                  : ""
              }
              value={formik.values.studentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Edad del alumno"
              type="number"
              name="studentAge"
              error={
                formik.errors.studentAge !== undefined &&
                formik.touched.studentAge
              }
              helperText={
                formik.touched.studentAge ? formik.errors.studentAge : ""
              }
              value={formik.values.studentAge}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
        </Grid>
      </PersonalFormWrapper>
      <FootSteperButtons disabledBack />
    </form>
  );
};
