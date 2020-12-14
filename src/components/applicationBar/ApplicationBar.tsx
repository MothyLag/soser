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
import { useHistory } from "react-router-dom";
import { IApplicationBarProps } from "./ApplicationBar.interfaces";
export const ApplicationBar = (props: IApplicationBarProps) => {
  const { setOpenDrawer } = props;
  const history = useHistory();
  return (
    <AppBar
      position="static"
      style={{ marginBottom: "10px", backgroundColor: "#F24B4B" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpenDrawer(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Typography
          style={{ flexGrow: 1, cursor: "pointer" }}
          variant="h6"
          onClick={() => history.push("/home")}
        >
          Soser
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
