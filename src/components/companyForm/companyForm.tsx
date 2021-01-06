import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { CompanyFormWrapper } from "./companyForm.styles";
import { FootSteperButtons } from "../footSteperButtons/footSteperButtons";
import { useDispatch } from "react-redux";
import { useCompanyForm } from "./company.formik";

export const CompannyForm = () => {
  const dispatch = useDispatch();
  const formik = useCompanyForm(dispatch);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Datos de la Empresa</h1>
      <CompanyFormWrapper>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Nombre de la empresa"
              name="companyName"
              value={formik.values.companyName}
              error={
                formik.errors.companyName !== undefined &&
                formik.touched.companyName
              }
              helperText={
                formik.touched.companyName ? formik.errors.companyName : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Ubicación"
              name="companyAddress"
              value={formik.values.companyAddress}
              error={
                formik.errors.companyAddress !== undefined &&
                formik.touched.companyAddress
              }
              helperText={
                formik.touched.companyAddress
                  ? formik.errors.companyAddress
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Número de Teléfono"
              name="companyPhone"
              value={formik.values.companyPhone}
              error={
                formik.errors.companyPhone !== undefined &&
                formik.touched.companyPhone
              }
              helperText={
                formik.touched.companyPhone ? formik.errors.companyPhone : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="RFC"
              name="companyRFC"
              value={formik.values.companyRFC}
              error={
                formik.errors.companyRFC !== undefined &&
                formik.touched.companyRFC
              }
              helperText={
                formik.touched.companyRFC ? formik.errors.companyRFC : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Departamento"
              name="companyDepartment"
              value={formik.values.companyDepartment}
              error={
                formik.errors.companyDepartment !== undefined &&
                formik.touched.companyDepartment
              }
              helperText={
                formik.touched.companyDepartment
                  ? formik.errors.companyDepartment
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <TextField
              variant="outlined"
              label="Encargado del departamento"
              name="headDepartment"
              value={formik.values.headDepartment}
              error={
                formik.errors.headDepartment !== undefined &&
                formik.touched.headDepartment
              }
              helperText={
                formik.touched.headDepartment
                  ? formik.errors.headDepartment
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
        </Grid>
      </CompanyFormWrapper>
      <FootSteperButtons />
    </form>
  );
};
