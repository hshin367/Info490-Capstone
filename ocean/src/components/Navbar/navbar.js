// import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  NavbarWrapper,
  NavbarItemsContainer,
  NavItem,
} from "./navbarStyle.js";
import AccountDropdown from "../DropDownMenu/AccountDropdown";
import { withRouter } from "react-router";
import Logo from "../Logo/Logo";

const NavLink = ({ href, children }) => (
  <NavItem>
    <a href={href}>{children}</a>
  </NavItem>
);

const Navbar = (props) => {
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
          <NavLink href="/aquarium">AQUARIUM</NavLink>
          <NavLink href="/friends">FRIENDS</NavLink>
          <NavLink href="/events">EVENTS</NavLink>
          <AccountDropdown toggleTheme={props.toggleTheme} bgCol={props.bgCol}>
            <NavItem>ACCOUNT</NavItem>
          </AccountDropdown>
          {/* {localStorage.getItem("user-info") ? (
            <WhiteButton onClick={logout}>Log Out</WhiteButton>
          ) : null} */}
        </NavbarItemsContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default withRouter(Navbar);
