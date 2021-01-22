import React, { useEffect } from "react";
import { useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { FileDownload } from "../../components/fileDownload/fileDownload";
import { ManageFilesWrapper } from "./manageFiles.styles";

export const ManageFiles = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    const auxFiles = [
      "Solicitud del servicio social",
      "Carta compromiso",
      "Carta de Aceptación",
      "Plan de trabajo",
      "Reporte biestrak",
      "Formato de Evaluación Cualitativa del prestador",
      "Formato de Autoevaluación Cualitativa del prestador",
      "Formato de Evaluación de las actividades del prestador",
      "Carta de terminación",
      "Informe final",
      "Fechas para tramitar S.S",
    ];
    setFiles(auxFiles);
  }, []);
  return (
    <>
      <ApplicationBar setOpenDrawer={setOpenDrawer} />
      <DrawerApp open={openDrawer} setOpen={setOpenDrawer} />
      <ManageFilesWrapper>
        {files.map((fileName, index) => (
          <FileDownload fileName={fileName} key={`fileManage-${index}`} admin />
        ))}
      </ManageFilesWrapper>
    </>
  );
};
