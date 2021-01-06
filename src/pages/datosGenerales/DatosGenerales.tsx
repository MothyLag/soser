import { useMutation } from "@apollo/client";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { FileUploader } from "../../components/fileUploader/fileUploader";
import UPLOAD_PICTURE from "../../graphql/uploadPicture.mutation";
import { ContentWrapper, DatosGeneralesWrapper } from "./datosGenerales.styles";

export const DatosGenerales = () => {
  const [drawer, setDrawer] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadPicture, { data, loading, error }] = useMutation(UPLOAD_PICTURE);
  return (
    <>
      <DrawerApp open={drawer} setOpen={setDrawer} />
      <ApplicationBar openDrawer={drawer} setOpenDrawer={setDrawer} />
      <DatosGeneralesWrapper>
        <ContentWrapper>
          <FileUploader files={files} setFiles={setFiles} />
          <Button
            style={{ alignSelf: "flex-end" }}
            variant="contained"
            color="primary"
            disabled={files === null}
            onClick={() => {
              if (files !== null)
                uploadPicture({ variables: { file: files[0] } });
            }}
          >
            Trepar &nbsp; <FontAwesomeIcon icon={faArrowCircleUp} />
          </Button>
        </ContentWrapper>
      </DatosGeneralesWrapper>
    </>
  );
};
