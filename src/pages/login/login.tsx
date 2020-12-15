import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  Backdrop,
  CircularProgress,
  Snackbar,
  TextField,
} from "@material-ui/core";
import "../../App.css";
import Button from "@material-ui/core/Button";

import React, { useEffect, useState } from "react";
import {
  LoginWrapper,
  BlurDiv,
  LoginBox,
  InputIcon,
  Field,
} from "./login.styles";
import { useLazyQuery } from "@apollo/client";
import { LOG_IN } from "../../graphql/login.query";
import { useLoginForm } from "./login.formik";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../hooks";

export const LoginPage = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [login, { data, error, loading }] = useLazyQuery(LOG_IN);
  const formik = useLoginForm(login);
  useEffect(() => {
    if (error) {
      setErrorOpen(true);
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      setSuccessOpen(true);
      history.replace("/home");
    }
  }, [data]);
  return (
    <LoginWrapper>
      <BlurDiv>
        <LoginBox onSubmit={formik.handleSubmit}>
          <Field>
            <InputIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={userFocus ? "#F50057" : "white"}
                style={{ marginRight: "10px", marginBottom: "5px" }}
              />
              <TextField
                label="Número de control"
                inputProps={{
                  autocomplete: "new-password",
                  className: "textWhite",
                }}
                value={formik.values.ctrlNumber}
                onChange={formik.handleChange}
                name="ctrlNumber"
                type="number"
                onFocus={() => setUserFocus(true)}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setUserFocus(false);
                }}
                error={
                  formik.errors.ctrlNumber !== undefined &&
                  formik.touched.password
                }
                color="secondary"
                size="medium"
              />
            </InputIcon>
            {formik.errors.ctrlNumber && formik.touched.ctrlNumber && (
              <small style={{ color: "red" }}>{formik.errors.ctrlNumber}</small>
            )}
          </Field>
          <Field>
            <InputIcon>
              <FontAwesomeIcon
                icon={faKey}
                color={passFocus ? "#F50057" : "white"}
                style={{ marginRight: "10px", marginBottom: "5px" }}
              />

              <TextField
                label="Contraseña"
                type="password"
                color="secondary"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                error={
                  formik.errors.password !== undefined &&
                  formik.touched.password
                }
                onFocus={() => setPassFocus(true)}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setPassFocus(false);
                }}
                inputProps={{
                  autocomplete: "new-password",
                  className: "textWhite",
                }}
                size="medium"
              />
            </InputIcon>
            {formik.errors.password && formik.touched.password && (
              <small style={{ color: "red" }}>{formik.errors.password}</small>
            )}
          </Field>
          <Button
            style={{ alignSelf: "flex-end" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Entrar
          </Button>
        </LoginBox>
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
      {data && (
        <Snackbar
          open={successOpen}
          autoHideDuration={6000}
          onClose={() => setSuccessOpen(false)}
        >
          <Alert severity="success">Bienvenido</Alert>
        </Snackbar>
      )}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </LoginWrapper>
  );
};
