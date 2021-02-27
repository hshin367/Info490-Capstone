import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  h1 { 
    color: white;
  }

`;

GlobalStyle.displayName = "GlobalStyle";
export default GlobalStyle;
