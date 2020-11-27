import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@material-ui/core";
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
              color={userFocus ? "#F50057" : "#A68881"}
              style={{ marginRight: "10px", marginBottom: "5px" }}
            />
            <TextField
              style={{ color: "white" }}
              label="Nombre de Usuario"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              size="medium"
            />
          </InputIcon>
          <InputIcon>
            <FontAwesomeIcon
              icon={faKey}
              color={passFocus ? "#F50057" : "#A68881"}
              style={{ marginRight: "10px", marginBottom: "5px" }}
            />
            <TextField
              id="input-with-icon-grid"
              label="Contraseña"
              color="secondary"
              onFocus={() => setPassFocus(true)}
              onBlur={() => setPassFocus(false)}
              size="medium"
            />
          </InputIcon>
          <Button
            style={{ alignSelf: "flex-end" }}
            variant="contained"
            color="primary"
          >
            botonsin
          </Button>
        </LoginBox>
      </BlurDiv>
    </LoginWrapper>
  );
};
