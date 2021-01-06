import styled from "styled-components";

export const FileUploaderWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-style: dotted;
  border-color: grey;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.3s;
  :hover {
    transform: scale(1.05);
  }
`;
