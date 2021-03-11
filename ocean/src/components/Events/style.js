import styled from "styled-components";
import { Flex } from "../../pages/styles/style.js";
import { darken, lighten } from "polished";

const TitleBarContainer = styled(Flex)`
  padding: 0;
  align-items: center;
  justify-content: space-between;
`;

const EventBox = styled.div`
  background-color: ${(props) =>
    props.today ? props.theme.colors.dark_blue : props.theme.colors.light_blue};
  border-radius: 7px;
  padding: ${(props) =>
    props.upcoming ? props.theme.paddings.xs : props.theme.paddings.lg};
  margin: 0 ${(props) => props.theme.paddings.base};
  min-width: ${(props) => (props.upcoming ? "400px" : "200px")};
  min-height: 200px;
  color: ${(props) =>
    props.today ? props.theme.colors.white : props.theme.colors.dark_blue};

  &:hover {
    background: ${darken(0.2, "white")};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, "white")};
    cursor: pointer;
  }
`;

const EventBoxesContainer = styled(Flex)`
  padding: 1.625rem 0.625rem 0px 0.625rem;
`;

// contains the events boxes.
// draws a solid border on the left.
const EventsContainer = styled(Flex)`
  border-left: 1.3px solid;
  position: relative;
  margin-top: ${(props) => props.theme.margins.xxl};
`;

// For the circle that goes on top of the vertical line
const Circle = styled.div`
  position: absolute;
  shape-outside: circle();
  clip-path: circle();
  background: ${(props) => props.theme.colors.dark_blue};
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

export {
  LocationTime,
  EventBox,
  EventsContainer,
  EventBoxesContainer,
  Circle,
  TitleBarContainer,
  CircleCounter,
};
