import React, { useEffect, useState } from "react";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { FileDownload } from "../../components/fileDownload/fileDownload";
import { DownloadFilesWrapper } from "./downloadFiles.styles";

export const DownloadFiles = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
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
      <DownloadFilesWrapper>
        {files.map((fileName, index) => (
          <FileDownload fileName={fileName} key={`fileDownload-${index}`} />
        ))}
      </DownloadFilesWrapper>
    </>
  );
};
