import { faFile, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IFileDownloadProps } from "./fileDownload.interfaces";
import {
  FileElementWrapper,
  FileIcon,
  FileIconWrapper,
  FileTimes,
  FileWrapper,
} from "./fileDownload.styles";

export const FileDownload = (props: IFileDownloadProps) => {
  const { admin = false, fileName } = props;
  return (
    <FileElementWrapper>
      <FileWrapper>
        {admin && (
          <FileTimes>
            <FontAwesomeIcon icon={faTimesCircle} />
          </FileTimes>
        )}
        {admin !== true && <div></div>}
        <FileIcon>
          <FileIconWrapper>
            <FontAwesomeIcon icon={faFile} size="5x" />
          </FileIconWrapper>
        </FileIcon>
      </FileWrapper>
      {fileName}
    </FileElementWrapper>
  );
};
