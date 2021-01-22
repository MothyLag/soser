import styled from "styled-components";

export const FileElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 20px;
  max-width: 150px;
`;

export const FileIconWrapper = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export const FileWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 4px;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 15px 135px;
`;

export const FileIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileTimes = styled.div`
  display: flex;
  justify-content: flex-end;
`;
