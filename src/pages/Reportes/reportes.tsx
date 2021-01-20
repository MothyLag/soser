import { useMutation } from "@apollo/client";
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
import UPLOAD_REPORT from "../../graphql/uploadReport.mutation";
import { ReportWrapper, FormBox, FileInput } from "./reportes.styles";

export const Reports = () => {
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [uploadReport] = useMutation(UPLOAD_REPORT);
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
          <FileInput
            type="file"
            onChange={(e) => setSelectedFile(e.target.files)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              uploadReport({
                variables: {
                  file: selectedFile !== null ? selectedFile[0] : selectedFile,
                },
              })
            }
          >
            Subir &nbsp;
            <FontAwesomeIcon icon={faArrowCircleUp} />
          </Button>
        </FormBox>
      </ReportWrapper>
    </>
  );
};
