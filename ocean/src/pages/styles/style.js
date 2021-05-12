import { PropertySafetyOutlined } from "@ant-design/icons";
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
      ${props.theme.fontSizes.titleSize}
    `}

  ${(props) =>
    props.size === "xxl" &&
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
      : props.padding === "base"
      ? props.theme.paddings.base
      : props.padding};
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
  background-color: ${(props) => props.backgroundColor};
  bottom: ${(props) => props.bottom};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  left: ${(props) => props.left};
`;

const HorizontalScrollableContainer = styled(Flex)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Blur = styled.span`
  background: radial-gradient(
    100% 99.11% at 0% 0.89%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  // -webkit-backdrop-filter: blur(8px);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  z-index: 0;
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

const FriendsPageContainer = styled(Flex)`
  flexdirection: column;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const FriendContainer = styled(Flex)`
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 3% auto auto auto;
  background: radial-gradient(
    100% 99.11% at 0% 0.89%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  // -webkit-backdrop-filter: blur(8px);
  height: 93%;
  width: 98%;
  border: 1px solid white;
  border-radius: 10px;
  position: absolute;
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
    props.bold
      ? "700"
      : props.semibold
      ? "600"
      : props.light
      ? "300"
      : "normal"};
  padding: ${(props) =>
    props.padding === "sm"
      ? props.theme.paddings.small
      : props.padding === "xs"
      ? props.theme.paddings.xs
      : props.padding === "lg"
      ? props.theme.paddings.lg
      : props.padding === "xl"
      ? props.theme.paddings.xl
      : props.padding === "xxl"
      ? props.theme.paddings.xl
      : props.padding === "none"
      ? props.theme.paddings.none
      : props.theme.paddings.base};
  padding-top: ${(props) =>
    props.paddingTop === "sm"
      ? props.theme.paddings.small
      : props.paddingTop === "xs"
      ? props.theme.paddings.xs
      : props.paddingTop === "lg"
      ? props.theme.paddings.lg
      : props.paddingTop === "xl"
      ? props.theme.paddings.xl
      : props.paddingTop === "xxl"
      ? props.theme.paddings.xxl
      : props.paddingTop === "none"
      ? props.theme.paddings.none
      : props.theme.paddings.base};
  padding-left: ${(props) =>
    props.paddingLeft === "sm"
      ? props.theme.paddings.small
      : props.paddingLeft === "xs"
      ? props.theme.paddings.xs
      : props.paddingLeft === "lg"
      ? props.theme.paddings.lg
      : props.paddingLeft === "xl"
      ? props.theme.paddings.xl
      : props.paddingLeft === "xxl"
      ? props.theme.paddings.xl
      : props.paddingLeft === "none"
      ? props.theme.paddings.none
      : props.theme.paddings.base};
  z-index: 0;
`;

export {
  Bg,
  Blur,
  Container,
  TextBox,
  SignUpFormContainer,
  HalfFormContainer,
  Flex,
  LoginContainer,
  HorizontalScrollableContainer,
  FriendContainer,
  FriendsPageContainer,
};
