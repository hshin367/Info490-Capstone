import styled from "styled-components";

const LogoText = styled.h1`
  letter-spacing: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
`;

export { LogoText };
