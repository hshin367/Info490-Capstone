import React from "react";
import styled, { css } from "styled-components";
// import "antd/dist/antd.css";
import { Button } from "antd";
import { darken, lighten } from "polished";
import theme from "../../theme";

// TODO : look for a better way of css ordering for the colors part.
// TODO : esp. the button:hover, active.

const colors = css`
  ${(props) => {
    const selectedColor = props.theme.colors[props.color];
    const fontColor =
      props.color === "white" ? theme.colors.dark_blue : theme.colors.white;

    return css`
      background: ${selectedColor};
      color: ${theme.colors.dark_blue};
    `;
  }}
`;

const sizes = css`
  ${(props) =>
    props.size === "large" &&
    css`
      height: 3rem;
      font-size: ${theme.fontSizes.lg};
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      font-size: ${theme.fontSizes.base};
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      height: 2rem;
      font-size: ${theme.fontSizes.small};
    `}
  
  ${(props) =>
    props.size === "signup" &&
    css`
      height: 2rem;
      width: 10rem;
      font-size: ${theme.fontSizes.small};
    `}
`;

const StyledButton = styled(Button)`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  // colors
  ${colors};
  justify-content: center;
  color: ${theme.colors.dark_blue};
  // Size
  ${sizes}
  &:hover {
    background: ${darken(0.2, "white")};
    color: ;
  }
  &:active {
    background: ${darken(0.1, "white")};
  }
`;

// const Button = ({ children, ...rest }) => {
//   return <StyledButton {...rest}>{children}</StyledButton>;
// };

const SignupButton = ({ children, ...rest }) => {
  return (
    <StyledButton color="white" size="signup" {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: theme.colors.dark_blue,
};

export { SignupButton };
