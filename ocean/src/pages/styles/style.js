import styled, { css } from "styled-components";
import img from "../../img/Background.png";

const sizes = css`
  ${(props) =>
    props.size === "large" &&
    css`
      ${props.theme.fontSizes.lg}
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      ${props.theme.fontSizes.base}
    `}

  ${(props) =>
    props.size === "title" &&
    css`
      ${props.theme.fontSizes.xxl}
    `}

  ${(props) =>
    props.size === "xxxl" &&
    css`
      ${props.theme.fontSizes.xxxl}
    `}

  ${(props) =>
    props.size === "xs" &&
    css`
      ${props.theme.fontSizes.xs}
    `}
`;

// Login
const Bg = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  display: flex;
  min-height: 100vh;  
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  position: ${(props) => props.position};
  padding: ${(props) =>
    props.padding === "sm"
      ? props.theme.paddings.small
      : props.padding === "lg"
      ? props.theme.paddings.lg
      : props.padding === "xl"
      ? props.theme.paddings.xl
      : props.padding === "xxl"
      ? props.theme.paddings.xxl
      : props.theme.paddings.base};
  padding-left: ${(props) =>
    props.paddingLeft === "sm"
      ? props.theme.paddings.small
      : props.paddingLeft === "lg"
      ? props.theme.paddings.lg
      : props.paddingLeft === "xl"
      ? props.theme.paddings.xl
      : props.paddingLeft === "xxl"
      ? props.theme.paddings.xxl
      : props.theme.paddings.base};
`;

const HorizontalScrollableContainer = styled(Flex)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

// TODO : take in a variable for the style (row, col)
const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`;

const LoginContainer = styled(Container)`
justify-content: ${(props) => props.justifyContent};
background-color: ${(props) =>
  props.backgroundColor === "opaque" ? "rgba(255, 255, 255, 0.2)" : ""};
flex-direction: ${(props) => props.flexDirection};
width: ${(props) => props.width};
padding: ${(props) => props.theme.paddings.xl}
  ${(props) => props.theme.paddings.xxxl};
height: 50%;
`;

const SignUpFormContainer = styled(Flex)`
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) =>
    props.backgroundColor === "opaque" ? "rgba(255, 255, 255, 0.2)" : ""};
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  padding: ${(props) => props.theme.paddings.xl}
    ${(props) => props.theme.paddings.xxxl};
  border-radius: 20px;
`;

const HalfFormContainer = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
`;

// textbox
const TextBox = styled.div`
  color: ${(props) =>
    props.color === "white"
      ? props.theme.colors.white
      : props.color === "darkBlue"
      ? props.theme.colors.dark_blue
      : props.color === "black"
      ? props.theme.colors.black
      : "inherit"};
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  display: ${(props) => props.display};
  font-size: ${sizes};
  font-weight: ${(props) =>
    props.bold ? "700" : props.light ? "300" : "normal"};
  padding: ${(props) =>
    props.padding === "sm"
      ? props.theme.paddings.small
      : props.padding === "lg"
      ? props.theme.paddings.lg
      : props.padding === "xl"
      ? props.theme.paddings.xl
      : props.padding === "xxl"
      ? props.theme.paddings.xl
      : props.theme.paddings.base};
`;

export {
  Bg,
  Container,
  TextBox,
  SignUpFormContainer,
  HalfFormContainer,
  Flex,
  LoginContainer,
  HorizontalScrollableContainer,
};
