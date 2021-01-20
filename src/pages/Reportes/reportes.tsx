import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { ReportWrapper, FormBox, FileInput } from "./reportes.styles";

export const Reports = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <DrawerApp open={drawer} setOpen={setDrawer} />
      <ApplicationBar setOpenDrawer={setDrawer} />
      <ReportWrapper>
        <FormBox>
          <FormControl>
            <TextField
              variant="outlined"
              label="Número de Control"
              disabled
              defaultValue="15690223"
            />
          </FormControl>
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel id="report-number">Número de Reporte</InputLabel>
            <Select
              labelId="report-number"
              name="reportNumber"
              label="Número de Reporte"
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              variant="outlined"
              label="Número de Control"
              disabled
              defaultValue="15690223"
            />
          </FormControl>
          <FileInput type="file" />
          <Button variant="contained" color="primary">
            Subir &nbsp;
            <FontAwesomeIcon icon={faArrowCircleUp} />
          </Button>
        </FormBox>
      </ReportWrapper>
    </>
  );
};
