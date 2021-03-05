import styled, { css } from "styled-components";
import { TextBox } from "../../pages/styles/style.js";

const FishTextContainer = styled.div`
  position: absolute;
  right: 250px;
  bottom: 30px;
`;

// https://bennettfeely.com/clippy/ for creating clip paths
// fix the background size a bit more later.
const FishImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-image: url("/img/${(props) => props.url}");
  background-size: 600px;
  clip-path: circle(102% at 100% 50%);
  height: 400px;
  width: 500px;
  z-index: 1;
  linear-gradient: rgba(255, 0, 0, 0.45);
  // box-shadow: -14px 4px 20px 9px white;
  background-color: rgba(0, 0, 0, 0.3); // Tint color
  background-blend-mode: multiply;
`;

const FishText = styled(TextBox)`
  padding: ${(props) => props.theme.paddings.xs};
  font-size: ${(props) =>
    props.size === "name"
      ? props.theme.fontSizes.xxxl
      : props.theme.fontSizes.sm};
  font-weight: ${(props) => props.size === "name" && "600"};
  line-height: 1;
  color: white;
`;

export { FishImage, FishText, FishTextContainer };
