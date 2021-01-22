import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { MenuCard } from "../../components/menuCard/menuCard";
import { AdminHomeWrapper, AdminSquareOption } from "./adminHome.styles";

export const AdminHome = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useHistory();
  return (
    <>
      <ApplicationBar setOpenDrawer={setOpenDrawer} />
      <DrawerApp open={openDrawer} setOpen={setOpenDrawer} />
      <AdminHomeWrapper>
        <AdminSquareOption>
          <MenuCard
            onClick={() => history.push("admin-files")}
            text="Administrar Archivos"
          />
        </AdminSquareOption>
        <AdminSquareOption>
          <MenuCard
            onClick={() => {}}
            text="Administrar Información de alumnos"
            color="#F24B4B"
          />
        </AdminSquareOption>
      </AdminHomeWrapper>
    </>
  );
};
