import styled from "styled-components";
import theme from "../../theme";
import img from "../../img/LoginBackground.png";

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

// textbox
const TextBox = styled.div`
  color: ${(props) =>
    props.color == "white"
      ? theme.colors.white
      : props.color == "darkBlue"
      ? theme.colors.dark_blue
      : theme.colors.black};
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  padding: ${(props) =>
    props.padding == "sm"
      ? theme.paddings.small
      : props.padding == "lg"
      ? theme.paddings.lg
      : props.padding == "xl"
      ? theme.paddings.xl
      : props.padding == "xxl"
      ? theme.paddings.xl
      : theme.paddings.base};
`;

export { Bg, Container, TextBox };
