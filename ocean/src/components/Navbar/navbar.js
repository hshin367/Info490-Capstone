// import PropTypes from "prop-types";
import React from "react";
// import styled from "styled-components";
import {
  Container,
  NavbarWrapper,
  NavbarItemsContainer,
  NavItem,
} from "./navbarStyle.js";
import {useHistory} from "react-router-dom"

const NavLink = ({ href, children }) => (
  <NavItem>
    <a href={href}>{children}</a>
  </NavItem>
);

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user-info"))
  console.warn(user)

  const history = useHistory();


  function logout() {
    console.log("loggin out")
    localStorage.clear();
    history.push("/login")
  }

  return (
    <Container>
      <NavbarWrapper>
        <NavLink href="/">RESTORE</NavLink>

        <NavbarItemsContainer>
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/">AQUARIUM</NavLink>
          <NavLink href="/events">EVENTS</NavLink>
          <NavLink href="/">ACCOUNT</NavLink>
          {localStorage.getItem("user-info")?
            <button onClick={logout}>Log Out</button>
            :null
          }
        </NavbarItemsContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
