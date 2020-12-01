import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const ApplicationBar = () => {
  return (
    <AppBar
      position="static"
      style={{ marginBottom: "10px", backgroundColor: "#F24B4B" }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Typography style={{ flexGrow: 1 }} variant="h6">
          Soser
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
