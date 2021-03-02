import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  h1 { 
    color: white;
  }

  .wrapper { 
    height: 100vh;
  }

  * {
    font-family: "Open Sans", sans-serif;
  }

  nav + div { 
    // padding-top: 50px;
  }

  button a { 
    color: none;
  }

  // Border-radius


`;

GlobalStyle.displayName = "GlobalStyle";
export default GlobalStyle;
