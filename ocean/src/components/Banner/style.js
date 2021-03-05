import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: ${theme.colors.white};
  height: fit-content;
  position: relative;
  // display: flex;
  // width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const DateContent = styled.div`
  padding-left: ${(props) => props.theme.paddings.xxxl};
  position: absolute;
  bottom: 0;
  z-index: 3;
  font-size: ${theme.fontSizes.xl};
`;

const TDate = styled.div`
  font-size: ${theme.fontSizes.xxxxl};
  font-weight: 600;
  line-height: 1;
`;

export { Container, DateContent, TDate };
