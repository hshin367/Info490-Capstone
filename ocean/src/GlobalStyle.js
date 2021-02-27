import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  h1 { 
    color: white;
  }
  * {
    font-family: "Open Sans", sans-serif;
  }
`;

GlobalStyle.displayName = "GlobalStyle";
export default GlobalStyle;
