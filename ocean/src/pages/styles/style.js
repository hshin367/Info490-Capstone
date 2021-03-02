import styled, { css } from "styled-components";
import img from "../../img/LoginBackground.png";

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
`;

// Login
const Bg = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;

  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const Flex = styled.div`
  display: flex;
`;

// TODO : take in a variable for the style (row, col)
const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`;

const SignUpFormContainer = styled(Flex)`
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) =>
    props.backgroundColor === "opaque" ? "rgba(255, 255, 255, 0.3)" : ""};
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  padding: ${(props) => props.theme.paddings.xl}
    ${(props) => props.theme.paddings.xxxl};
  border-radius: 7px;
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

export { Bg, Container, TextBox, SignUpFormContainer, HalfFormContainer, Flex };
