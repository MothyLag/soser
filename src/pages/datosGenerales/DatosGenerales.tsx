import React, { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";

export const DatosGenerales = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <DrawerApp open={drawer} setOpen={setDrawer} />
      <ApplicationBar openDrawer={drawer} setOpenDrawer={setDrawer} />
    </div>
  );
};
