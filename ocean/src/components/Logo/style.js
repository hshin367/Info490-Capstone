import styled from "styled-components";
import logo from "../../img/Logo.png";

const LogoText = styled.h1`
  letter-spacing: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
`;

const SmallLogoText = styled.div`
  letter-spacing: 5px;
`;

const LogoImage = styled.span`
  background-image: url(${logo});
  width: ${(props) => (props.large ? "25px" : "17px")};
  height: ${(props) => (props.large ? "25px" : "17px")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: ${(props) => (props.marginRight ? "8px" : 0)};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export { LogoText, LogoContainer, LogoImage, SmallLogoText };
