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
`;

const Flex = styled.div`
  display: flex;
`;

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`;

export { Bg, Container };
