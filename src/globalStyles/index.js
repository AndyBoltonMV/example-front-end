import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.isLight ? "#222" : "#fff")};
  color: ${(props) => (props.isLight ? "#fff" : "#222")};
`;
