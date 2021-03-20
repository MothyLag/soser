import styled from "styled-components";

export const SignUpWrapper = styled.div`
  background-image: url("girl-laptop.jpg");
  background-size: cover;
  min-height: 100vh;
`;

export const BlurDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(217, 130, 146, 0.5);
  backdrop-filter: blur(5px);
`;

export const SignUpBox = styled.form`
  display: flex;
  border-radius: 5px;
  margin-top: 20vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 50vh;
  background-color: white;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: flex-end;
`;
