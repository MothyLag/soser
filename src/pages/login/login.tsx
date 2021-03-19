import { useLazyQuery } from "@apollo/client";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop, CircularProgress, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import { LOG_IN } from "../../graphql/login.query";
import { useStyles } from "../../hooks";
import { useLoginForm } from "./login.formik";
import {
  BlurDiv,
  Field,
  InputIcon,
  LoginBox,
  LoginWrapper,
} from "./login.styles";

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
    if (data && data !== null) {
      setSuccessOpen(true);
      localStorage.setItem("token", data.login.token);
      history.replace("/home");
    }
  }, [data, history]);
  return (
    <LoginWrapper>
      <BlurDiv>
        <LoginBox onSubmit={formik.handleSubmit}>
          <Field>
            <InputIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={userFocus ? "#F50057" : "#ff337c"}
                style={{
                  marginRight: "10px",
                  // marginBottom: "5px",
                  fontSize: "3rem",
                }}
              />
              <TextField
                label="Número de control"
                inputProps={{
                  autoComplete: "new-password",
                  className: "textWhite",
                }}
                value={formik.values.ctrlNumber}
                onChange={formik.handleChange}
                name="ctrlNumber"
                type="number"
                variant="outlined"
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
                color={passFocus ? "#F50057" : "#ff337c"}
                style={{
                  marginRight: "10px",
                  // marginBottom: "5px",
                  fontSize: "3rem",
                }}
              />

              <TextField
                label="Contraseña"
                type="password"
                color="secondary"
                value={formik.values.password}
                onChange={formik.handleChange}
                variant="outlined"
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
                  autoComplete: "new-password",
                  className: "textWhite",
                }}
                size="medium"
              />
            </InputIcon>
            {formik.errors.password && formik.touched.password && (
              <small style={{ color: "red" }}>{formik.errors.password}</small>
            )}
          </Field>
          <div>
            <Button
              style={{ alignSelf: "flex-end", marginRight: "2rem" }}
              size="medium"
              variant="contained"
              color="primary"
              type="submit"
            >
              Entrar
            </Button>
            <Button
              style={{ alignSelf: "flex-start", marginLeft: "2rem" }}
              variant="outlined"
              color="primary"
              onClick={() => history.push("/sign-up")}
            >
              Registrar
            </Button>
          </div>
        </LoginBox>
      </BlurDiv>
      {}
      {}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </LoginWrapper>
  );
};
