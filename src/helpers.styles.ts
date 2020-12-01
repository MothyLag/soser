import styled from "styled-components";

export const Segment = styled.div.attrs((props: any) => ({
  center: props.center ? true : false,
}))`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: ${(props: any) => (props.center ? "center" : "")};
`;
