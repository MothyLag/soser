import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { faFileAlt, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IDrawerProps } from "./drawer.interfaces";
import { useHistory } from "react-router-dom";

export const DrawerApp = (props: IDrawerProps) => {
  const { open, setOpen } = props;
  const history = useHistory();
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <div style={{ width: 250 }}>
        <List>
          <ListItem button onClick={() => history.push("/home")}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("datos-generales")}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faUser} />
            </ListItemIcon>
            <ListItemText primary={"Datos Generales"} />
          </ListItem>
          <ListItem button onClick={() => history.push("reportes")}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faFileAlt} />
            </ListItemIcon>
            <ListItemText primary={"Reportes"} />
          </ListItem>
          <ListItem button onClick={() => history.push("download-files")}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faFileAlt} />
            </ListItemIcon>
            <ListItemText primary={"descargar archivos"} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
