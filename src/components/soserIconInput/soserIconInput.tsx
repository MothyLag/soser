import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { InputIcon } from "../../pages/signUp/signUp.styles";
import { ISoserIconInputProps } from "./soserIconInput.interface";
import { SoserInputWrapper } from "./soserInput.styles";
export const SoserIconInput = (props: ISoserIconInputProps) => {
  const [inputFocus, setInputFocus] = useState(false);
  const {
    icon = faUser,
    label,
    type = "text",
    value,
    onBlur,
    onChange,
    touched,
    name,
    error,
  } = props;

  return (
    <SoserInputWrapper>
      <InputIcon>
        <FontAwesomeIcon
          icon={icon}
          color={inputFocus ? "#F50057" : "white"}
          style={{ marginRight: "10px" }}
        />
        <TextField
          onChange={onChange}
          onBlurCapture={onBlur}
          value={value}
          label={label}
          inputProps={{
            autoComplete: "new-password",
            className: "textWhite",
          }}
          type={type}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          color="secondary"
          size="medium"
          error={error !== undefined && touched}
          name={name}
        />
      </InputIcon>
      {touched && error && <small style={{ color: "red" }}>{error}</small>}
    </SoserInputWrapper>
  );
};
