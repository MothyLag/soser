import { useMutation } from "@apollo/client";
import {
  faEnvelope,
  faKey,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Snackbar } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { SoserIconInput } from "../../components/soserIconInput/soserIconInput";
import { CREATE_USER } from "../../graphql/createUser.mutation";
import { useSignUp } from "./signUp.formik";
import Alert from "@material-ui/lab/Alert";
import { BlurDiv, SignUpBox, SignUpWrapper } from "./signUp.styles";
import { CircularProgress } from "@material-ui/core";
import { Backdrop } from "@material-ui/core";
import { useStyles } from "../../hooks";

export const SignUp = () => {
  const [create, { data, loading, error }] = useMutation(CREATE_USER, {
    onError: () => setErrorOpen(true),
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const formik = useSignUp(create);
  const classes = useStyles();

  useEffect(() => {
    if (data) setSuccessOpen(true);
  }, [data]);
  useEffect(() => {
    if (error) setErrorOpen(true);
  }, [error]);
  return (
    <SignUpWrapper>
      <BlurDiv>
        <SignUpBox onSubmit={formik.handleSubmit}>
          <div>
            <h2 style={{ color: "white" }}>Registra tus datos</h2>
          </div>
          <SoserIconInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ctrlNumber}
            error={formik.errors.ctrlNumber}
            touched={formik.touched.ctrlNumber}
            label="Número de control"
            type="number"
            icon={faKey}
            name="ctrlNumber"
          />

          <SoserIconInput
            label="Nombre"
            type="text"
            icon={faUser}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name}
            touched={formik.touched.name}
            name="name"
          />
          <SoserIconInput
            label="Apellidos"
            type="text"
            icon={faUser}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
            name="lastName"
          />
          <SoserIconInput
            label="contraseña"
            type="password"
            icon={faLock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            name="password"
          />
          <SoserIconInput
            label="confirmar Contraseña"
            type="password"
            icon={faLock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            touched={formik.touched.confirmPassword}
            name="confirmPassword"
          />
          <SoserIconInput
            label="correo electrónico"
            type="text"
            icon={faEnvelope}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
            name="email"
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={loading}
            style={{ alignSelf: "flex-end", marginTop: "20px" }}
          >
            Guardar
          </Button>
        </SignUpBox>
      </BlurDiv>
      {error && (
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000}
          onClose={() => setErrorOpen(false)}
        >
          <Alert severity="error">{error.message}</Alert>
        </Snackbar>
      )}

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert severity="success">usuario creado correctamente</Alert>
      </Snackbar>
    </SignUpWrapper>
  );
};
