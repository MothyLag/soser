import { faEye, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";

export const AdminStudents = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  function createData(ctrlNumber: string, name: string) {
    return { name, ctrlNumber };
  }
  const rows = [
    createData("15690223", "Eduardo Monter Alonso"),
    createData("15690229", "Juan Carlos Alvarez"),
  ];
  return (
    <>
      <ApplicationBar setOpenDrawer={setOpenDrawer} />
      <DrawerApp open={openDrawer} setOpen={setOpenDrawer} />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>N° Control</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ctrlNumber}>
              <TableCell component="th" scope="row">
                {row.ctrlNumber}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">
                <Button>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
