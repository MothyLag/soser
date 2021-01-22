import { useMutation, useQuery } from "@apollo/client";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { FileUploader } from "../../components/fileUploader/fileUploader";
import { GET_USER_PICTURE } from "../../graphql/getUserPicture";
import UPLOAD_PICTURE from "../../graphql/uploadPicture.mutation";
import { ContentWrapper, DatosGeneralesWrapper } from "./datosGenerales.styles";

export const DatosGenerales = () => {
  const [drawer, setDrawer] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadPicture, { data, loading, error }] = useMutation(UPLOAD_PICTURE);
  const [successOpen, setSuccessOpen] = useState(true);
  const [errorOpen, setErrorOpen] = useState(true);
  const { data: dataPicture, loading: loadingPicture } = useQuery(
    GET_USER_PICTURE
  );
  useEffect(() => {
    if (data !== null) setSuccessOpen(true);
  }, [data]);

  useEffect(() => {
    if (error !== null) setSuccessOpen(true);
  }, [error]);

  return (
    <>
      <DrawerApp open={drawer} setOpen={setDrawer} />
      <ApplicationBar setOpenDrawer={setDrawer} />
      <DatosGeneralesWrapper>
        <ContentWrapper>
          {loadingPicture && <p>Loading image...</p>}
          {loadingPicture !== true && (
            <FileUploader
              files={files}
              setFiles={setFiles}
              serverPicture={dataPicture.getUserPicture}
            />
          )}

          <Button
            style={{ alignSelf: "flex-end" }}
            variant="contained"
            color="primary"
            disabled={files === null || loading}
            onClick={() => {
              if (files !== null)
                uploadPicture({ variables: { file: files[0] } });
            }}
          >
            Subir &nbsp; <FontAwesomeIcon icon={faArrowCircleUp} />
          </Button>
        </ContentWrapper>
        {error && (
          <Snackbar
            open={errorOpen}
            autoHideDuration={6000}
            onClose={() => setErrorOpen(false)}
          >
            <Alert severity="success">Ocurró un error inesperado</Alert>
          </Snackbar>
        )}
        {data && (
          <Snackbar
            open={successOpen}
            autoHideDuration={6000}
            onClose={() => setSuccessOpen(false)}
          >
            <Alert severity="success">Imágen guardada correctamente</Alert>
          </Snackbar>
        )}
      </DatosGeneralesWrapper>
    </>
  );
};
