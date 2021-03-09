import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
  Container,
  NavbarWrapper,
  NavbarItemsContainer,
  NavItem,
} from "./navbarStyle.js";

const NavLink = ({ href, children }) => (
  <NavItem>
    <a href={href}>{children}</a>
  </NavItem>
);

const Navbar = () => {
  return (
    <Container>
      <NavbarWrapper>
        <NavLink href="/">RESTORE</NavLink>

        <NavbarItemsContainer>
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/">AQUARIUM</NavLink>

          {/* // TODO : Create dropdown component */}
          <NavLink href="/events">EVENTS</NavLink>
          <NavLink href="/">ACCOUNT</NavLink>
        </NavbarItemsContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
