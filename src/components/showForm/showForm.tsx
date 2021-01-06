import React, { useState, useEffect } from "react";
import { Button, List, Snackbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../store/store.interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { CREATE_DATA } from "../../graphql/createData.mutation";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

export const ShowFormInfo = () => {
  const newData = useSelector((state: RootStoreState) => state.newData);
  const [createData, { data, loading, error }] = useMutation(CREATE_DATA);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (data) {
      setSuccessOpen(true);
      history.replace("/home");
    }
  }, [data, history]);

  useEffect(() => {
    if (error) {
      setErrorOpen(true);
    }
  }, [error]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <List>
        {Object.entries(newData).map((section: any, i: number) => {
          return Object.entries(section[1]).map((formData: any, j: number) => {
            return (
              <Typography>
                {formData[0]}:{formData[1]}
              </Typography>
            );
          });
        })}
      </List>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Button
          disabled={loading}
          variant="contained"
          color="primary"
          type="button"
          onClick={() =>
            createData({
              variables: {
                newData: {
                  ...newData.PersonalForm,
                  ...newData.EscolarForm,
                  ...newData.CompanyForm,
                },
              },
            })
          }
        >
          Guardar &nbsp;
          <FontAwesomeIcon icon={faSave} />
        </Button>
      </div>
      {error && (
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000}
          onClose={() => setErrorOpen(false)}
        >
          <Alert severity="error">Ocurrió un error, intente mas tarde</Alert>
        </Snackbar>
      )}
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert severity="success">Datos guardados correctamente</Alert>
      </Snackbar>
    </div>
  );
};
