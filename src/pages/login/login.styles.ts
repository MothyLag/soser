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

export const LoginBox = styled.form`
  background-color: white;
  border-radius: 5px;
  display: flex;
  margin-top: 30vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 50vh;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const Field = styled.div`
  margin-bottom: 30px;
`;

export const SmallTag = styled.button`
  cursor: "pointer";
  color: "#0000EE";
  text-decoration: underline;
  font-weight: bold;
`;
