import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { FileUploaderProps } from "./fileUploader.interfaces";
import { FileUploaderWrapper } from "./fileUploader.styles";

export const FileUploader = (props: FileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { files, setFiles, serverPicture } = props;
  useEffect(() => {
    console.log(files);
  }, [files]);
  return (
    <>
      <FileUploaderWrapper onClick={() => inputRef.current?.click()}>
        <input
          onChange={(event) => setFiles(event.target.files)}
          ref={inputRef}
          type="file"
          name="name"
          style={{ display: "none" }}
        />
        {files === null && serverPicture === "nopicture" && (
          <FontAwesomeIcon icon={faImage} size={"10x"} color="grey" />
        )}
        {files === null && serverPicture !== "nopicture" && (
          <img
            width="100%"
            height="100%"
            src={`data:image/jpeg;base64, ${serverPicture}`}
            alt="profile"
          />
        )}
        {files !== null && (
          <img
            width="100%"
            height="100%"
            src={URL.createObjectURL(files[0])}
            alt="profile"
          />
        )}
      </FileUploaderWrapper>
      {files !== null && <p>{files[0].name}</p>}
      {files === null && <p>Subir Foto</p>}
    </>
  );
};
