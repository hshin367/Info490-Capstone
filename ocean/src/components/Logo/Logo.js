import React from "react";
import logo from "../../img/Logo.png";
import { LogoContainer, LogoImage, SmallLogoText } from "./style";

const Logo = () => {
  return (
    <>
      <LogoContainer>
        <LogoImage large marginRight />
        <SmallLogoText>RESTORE</SmallLogoText>
      </LogoContainer>
    </>
  );
};

export default Logo;
