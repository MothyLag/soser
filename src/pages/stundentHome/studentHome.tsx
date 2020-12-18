import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { InfoModal } from "../../components/infoModal/InfoModal";
import { MenuCard } from "../../components/menuCard/menuCard";
import { StudentHomeWrapper } from "./studentHome.styles";
import {
  DURATION_SERVICE,
  HOW_SERVICE,
  OBJECTIVE_SERVICE,
  PURPOSE,
  WHAT_SERVICE,
} from "../../utils/texts";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { DrawerApp } from "../../components/Drawer/drawerApp";

export const StudentHome = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const [drawer, setDrawer] = useState(false);
  const [modalText, setModalText] = useState("");
  const history = useHistory();
  return (
    <>
      <DrawerApp open={drawer} setOpen={setDrawer} />
      <ApplicationBar setOpenDrawer={setDrawer} />
      <StudentHomeWrapper>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="¿Qué es el servicio social?"
                onClick={() => {
                  setModalText(WHAT_SERVICE);
                  openModal();
                }}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Objetivo del servicio social"
                onClick={() => {
                  setModalText(OBJECTIVE_SERVICE);
                  openModal();
                }}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Proposito del servicio social"
                onClick={() => {
                  setModalText(PURPOSE);
                  openModal();
                }}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Duración del servicio social y requisitos del servicio social"
                onClick={() => {
                  setModalText(DURATION_SERVICE);
                  openModal();
                }}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="¿Como realizar el servicio social?"
                onClick={() => {
                  setModalText(HOW_SERVICE);
                  openModal();
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <MenuCard
                color="#F24B4B"
                text="Cuestionario inicial"
                onClick={() => {
                  history.push("/cuestionario");
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </StudentHomeWrapper>
      <InfoModal open={open} setOpen={setOpen} text={modalText} />
    </>
  );
};
