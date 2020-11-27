import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("girl-laptop.jpg");
  background-size: cover;
`;

export const BlurDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(217, 130, 146, 0.5);
  backdrop-filter: blur(5px);
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100vh;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
`;
