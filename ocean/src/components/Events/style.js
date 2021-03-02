import styled from "styled-components";
import { darken, lighten } from "polished";

const EventBoxContainer = styled.div`
  background-color: ${(props) =>
    props.today ? props.theme.colors.dark_blue : props.theme.colors.light_blue};
  border-radius: 7px;
  padding: ${(props) => props.theme.paddings.lg};
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

const LocationTime = styled.div`
  line-height: 8px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export { LocationTime, EventBoxContainer };
