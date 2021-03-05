import styled from "styled-components";
import { Flex } from "../../pages/styles/style.js";
import { darken, lighten } from "polished";

const EventBox = styled.div`
  background-color: ${(props) =>
    props.today ? props.theme.colors.dark_blue : props.theme.colors.light_blue};
  border-radius: 7px;
  padding: ${(props) => props.theme.paddings.lg};
  margin: 0 ${(props) => props.theme.paddings.base};
  min-width: 200px;
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

const EventsContainer = styled(Flex)`
  border-left: solid;
  position: relative;
  margin-top: ${(props) => props.theme.margins.xxl};
`;

const Circle = styled.div`
  position: absolute;
  shape-outside: circle();
  clip-path: circle();
  background: ${(props) => props.theme.colors.dark_blue};
  top: 0;
  left: -6.5px;
  width: 10px;
  height: 10px;
`;

const LocationTime = styled.div`
  line-height: 8px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export { LocationTime, EventBox, EventsContainer, EventBoxesContainer, Circle };
