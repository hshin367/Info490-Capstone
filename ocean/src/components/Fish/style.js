import styled, { css } from "styled-components";

// https://bennettfeely.com/clippy/ for creating clip paths
// fix the background size a bit more later.
const Image = styled.div`
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
`;

export { Image };
