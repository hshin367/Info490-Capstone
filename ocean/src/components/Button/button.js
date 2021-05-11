import React from "react";
import styled, { css } from "styled-components";
// import "antd/dist/antd.css";
import { Button } from "antd";
import { darken, lighten } from "polished";
import theme from "../../theme";
import aquarImg from "../../img/aquarImg.png";

// TODO : look for a better way of css ordering for the colors part.
// TODO : esp. the button:hover, active.

const colors = css`
  ${(props) => {
    const selectedColor = props.theme.colors[props.color];
    const fontColor =
      props.color === "white"
        ? props.theme.colors.white
        : props.theme.colors.dark_blue;

    return css`
      background: ${selectedColor};
      color: ${theme.colors.dark_blue};
    `;
  }}
`;

const sizes = css`
  ${(props) =>
    props.size === "large" &&
    css`
      height: 3rem;
      font-size: ${theme.fontSizes.lg};
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      font-size: ${theme.fontSizes.base};
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      height: 2rem;
      font-size: ${theme.fontSizes.small};
    `}
  
  ${(props) =>
    props.size === "signup" &&
    css`
      height: 2rem;
      width: 10rem;
      font-size: ${theme.fontSizes.small};
    `}
`;

const AquarButton = styled.div`
  // background-image: url(${aquarImg});
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  height: ${(props) => (props.clicked ? "50vh" : "3vh")};
  width: ${(props) => (props.clicked ? "45vw" : "3vh")};
  background: ${(props) =>
    props.clicked
      ? `radial-gradient(100% 99.11% at 0% 0.89%, rgba(15, 25, 65, 0.48) 0%, rgba(14, 24, 63, 0.12) 100%)`
      : ""};
  backdrop-filter: ${(props) => (props.clicked ? "blur(30px)" : "")};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  border: ${(props) => props.theme.border.thin_solid};
  border-radius: ${(props) => props.theme.borderRadius.base};
  z-index: 3;
`;

const AquarBtnImg = styled.div`
  background-image: url(${aquarImg});
  position: absolute;
  bottom: 0;
  right: 0;
  height: 3vh;
  width: 3vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  padding: 2rem;
  z-index: 4;
`;

const StyledButton = styled(Button)`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  font-weight: normal;
  // colors
  ${colors};
  justify-content: center;
  color: ${(props) => props.textcolor === "white" && "white"};
  // Size
  ${sizes}
  &:hover {
    background: ${darken(0.2, "white")};
  }
  &:active {
    background: ${darken(0.1, "white")};
  }
`;

// const Button = ({ children, ...rest }) => {
//   return <StyledButton {...rest}>{children}</StyledButton>;
// };

const SignupButton = ({ children, ...rest }) => {
  return (
    <StyledButton color="white" size="signup" {...rest}>
      {children}
    </StyledButton>
  );
};

const WhiteButton = ({ children, ...rest }) => {
  return (
    <StyledButton color="white" size="medium" {...rest}>
      {children}
    </StyledButton>
  );
};

const DarkBlueButton = ({ children, ...rest }) => {
  return (
    <StyledButton color="dark_blue" textcolor="white" size="medium" {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: theme.colors.dark_blue,
};

export { SignupButton, WhiteButton, DarkBlueButton, AquarButton, AquarBtnImg };
