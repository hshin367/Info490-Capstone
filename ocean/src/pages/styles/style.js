import styled from "styled-components";
import theme from "../../theme";
import img from "../../img/LoginBackground.png";
import Form from "antd/lib/form/Form";

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
  padding: ${theme.paddings.xl} ${theme.paddings.xxxl};
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
      ? theme.colors.white
      : props.color === "darkBlue"
      ? theme.colors.dark_blue
      : theme.colors.black};
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  display: ${(props) => props.display};
  padding: ${(props) =>
    props.padding === "sm"
      ? theme.paddings.small
      : props.padding === "lg"
      ? theme.paddings.lg
      : props.padding === "xl"
      ? theme.paddings.xl
      : props.padding === "xxl"
      ? theme.paddings.xl
      : theme.paddings.base};
`;

export { Bg, Container, TextBox, SignUpFormContainer, HalfFormContainer };
