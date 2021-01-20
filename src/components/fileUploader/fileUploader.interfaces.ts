export interface FileUploaderProps {
  files: FileList | null;
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
  serverPicture: string;
}
