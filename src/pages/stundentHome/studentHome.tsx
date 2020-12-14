import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { InfoModal } from "../../components/infoModal/InfoModal";
import { MenuCard } from "../../components/menuCard/menuCard";
import { StudentHomeWrapper } from "./studentHome.styles";
import { EXAMPLE_TEXT } from "../../utils/texts";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { DrawerApp } from "../../components/Drawer/drawerApp";

export const StudentHome = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const [drawer, setDrawer] = useState(false);
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
                onClick={openModal}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Objetivo general del servicio social"
                onClick={openModal}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Objetivo especifico del servicio social"
                onClick={openModal}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Duración del servicio social"
                onClick={openModal}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="Requisitos indispensables del servicio social"
                onClick={openModal}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <MenuCard
                text="¿Como realizar el servicio social?"
                onClick={openModal}
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
      <InfoModal open={open} setOpen={setOpen} text={EXAMPLE_TEXT} />
    </>
  );
};
