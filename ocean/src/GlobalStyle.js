import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  a { 
    text-decoration: none;
  }
`;

GlobalStyle.displayName = "GlobalStyle";
export default GlobalStyle;
