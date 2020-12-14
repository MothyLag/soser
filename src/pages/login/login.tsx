import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@material-ui/core";
import "../../App.css";
import Button from "@material-ui/core/Button";

import React, { useState } from "react";
import { LoginWrapper, BlurDiv, LoginBox, InputIcon } from "./login.styles";

export const LoginPage = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  return (
    <LoginWrapper>
      <BlurDiv>
        <LoginBox>
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
              type="number"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              color="secondary"
              size="medium"
            />
          </InputIcon>
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
              onFocus={() => setPassFocus(true)}
              onBlur={() => setPassFocus(false)}
              inputProps={{
                autocomplete: "new-password",
                className: "textWhite",
              }}
              size="medium"
            />
          </InputIcon>
          <Button
            style={{ alignSelf: "flex-end" }}
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
        </LoginBox>
      </BlurDiv>
    </LoginWrapper>
  );
};
