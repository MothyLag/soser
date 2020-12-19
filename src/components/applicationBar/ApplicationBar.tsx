import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { IApplicationBarProps } from "./ApplicationBar.interfaces";
export const ApplicationBar = (props: IApplicationBarProps) => {
  const { setOpenDrawer } = props;
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    localStorage.clear();
    history.replace("/");
  };
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
        <Button color="inherit">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faUser} />
          </IconButton>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
