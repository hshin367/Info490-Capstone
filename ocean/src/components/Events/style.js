import styled from "styled-components";
import { Flex } from "../../pages/styles/style.js";
import { darken, lighten } from "polished";

const TitleBarContainer = styled(Flex)`
  padding: 0;
  align-items: center;
  justify-content: space-between;
`;

const EventBox = styled.div`
  background: radial-gradient(
    100% 99.11% at 0% 0.89%,
    rgba(15, 25, 65, 0.48) 0%,
    rgba(14, 24, 63, 0.12) 100%
  );
  backdrop-filter: blur(30px);
  border-radius: 15px;
  border: ${(props) => props.theme.border.thin_solid};
  padding: ${(props) =>
    props.upcoming ? props.theme.paddings.small : props.theme.paddings.lg};
  margin: 0 ${(props) => props.theme.paddings.xxl} 0 0;
  min-width: ${(props) => (props.upcoming ? "500px" : "200px")};
  max-height: 200px;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${darken(0.2, "white")};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, "white")};
    cursor: pointer;
  }
`;

const Blur = styled.div`
  filter: blur(2px);
  background-color: white;
`;

const EventBoxesContainer = styled(Flex)`
  padding: 1.625rem 0rem 0px 0rem;
`;

const ScrollableContainer = styled(Flex)`
  overflow-x: scroll;
  max-width: 100%;
  margin-bottom: 15px;
`;

// contains the events boxes.
// draws a solid border on the left.
const EventsContainer = styled(Flex)`
  border-left: white 1.3px solid;
  position: relative;
  margin-top: ${(props) => props.theme.margins.lg};
  padding-left: 20px;
`;

// For the circle that goes on top of the vertical line
const Circle = styled.div`
  position: absolute;
  shape-outside: circle();
  clip-path: circle();
  background: ${(props) => props.theme.colors.white};
  top: 0;
  left: -5px;
  width: 10px;
  height: 10px;
`;

// For Circles that have numbers inside
const CircleCounter = styled(Flex)`
  padding: 1px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  border: 1.5px solid ${(props) => (props.white ? "white" : "black")};
  width: ${(props) => (props.small ? "70px" : "100px")};
  height: ${(props) => (props.small ? "70px" : "100px")};
`;

const LocationTime = styled.div`
  line-height: 8px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export {
  LocationTime,
  EventBox,
  Blur,
  EventsContainer,
  EventBoxesContainer,
  Circle,
  Container,
  TitleBarContainer,
  CircleCounter,
  ScrollableContainer,
};
