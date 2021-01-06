import React from "react";
import { Button } from "@material-ui/core";
import { FootStepperButtonsProps } from "./footSteperButtons.interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export const FootSteperButtons = (props: FootStepperButtonsProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
      }}
    >
      <Button variant="contained" color="primary" type="submit">
        Siguiente &nbsp;
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </Button>
    </div>
  );
};
