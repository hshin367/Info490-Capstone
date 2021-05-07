import styled from "styled-components";

const Kelp = styled.img`
  height: auto;
  width: ${(props) => (props.width ? props.width + "px" : "50px")};
  bottom: ${(props) => (props.bottom ? props.bottom + "px" : "0px")};
  position: absolute;
  left: ${(props) => `${props.left}px`};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export { Kelp, Container };
