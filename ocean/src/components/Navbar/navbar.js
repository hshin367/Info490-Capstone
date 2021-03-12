// import PropTypes from "prop-types";
import React from "react";
// import styled from "styled-components";
import {
  Container,
  NavbarWrapper,
  NavbarItemsContainer,
  NavItem,
} from "./navbarStyle.js";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { WhiteButton } from "../Button/button.js";
import Logo from "../Logo/Logo";

const NavLink = ({ href, children }) => (
  <NavItem>
    <a href={href}>{children}</a>
  </NavItem>
);

const Navbar = (props) => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  // console.warn(user);

  const history = useHistory();

  function logout() {
    alert("logging out");
    // console.log("loggin out");
    localStorage.clear();
    history.push({ pathname: "/login" });
  }

  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/signup"
  ) {
    // console.log(props.location);
    return <></>;
  }

  return (
    <Container>
      <NavbarWrapper>
        <NavLink href="/">
          <Logo />
        </NavLink>

        <NavbarItemsContainer>
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/">AQUARIUM</NavLink>
          <NavLink href="/events">EVENTS</NavLink>
          <NavLink href="/">ACCOUNT</NavLink>
          {localStorage.getItem("user-info") ? (
            <WhiteButton onClick={logout}>Log Out</WhiteButton>
          ) : null}
        </NavbarItemsContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default withRouter(Navbar);
