import styled, { css } from "styled-components";
import { TextBox } from "../../pages/styles/style.js";

const FishTextContainer = styled.div`
  position: absolute;
  right: 250px;
  // original - 30px, for demo 60px
  bottom: 60px;
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
  // box-shadow: -14px 4px 20px 9px white;
  background-color: rgba(0, 0, 0, 0.4); // Tint color
  background-blend-mode: multiply;
`;

const FishPicContainer = styled.div`
  position: absolute;
  right: 0;
  top: 500px;
  transition: 2s linear;
  // filter: drop-shadow(-200px 10px 41px rgb(255, 255, 255));
`;

const FishPicContainerEnd = styled(FishPicContainer)`
  left: 450px;
`;

const FishText = styled(TextBox)`
  padding: ${(props) => props.theme.paddings.xs} 0;
  font-size: ${(props) =>
    props.size === "name"
      ? props.theme.fontSizes.xxxl
      : props.theme.fontSizes.sm};
  font-weight: ${(props) => props.size === "name" && "600"};
  line-height: 1;
  color: white;
`;

const FishImg = styled.div`
  background-image: url("/img/${(props) => props.url}");
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 5s linear;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`;

const FishEnd = styled(FishImg)`
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export {
  FishImg,
  FishEnd,
  FishImage,
  FishText,
  FishTextContainer,
  FishPicContainer,
  FishPicContainerEnd,
};
