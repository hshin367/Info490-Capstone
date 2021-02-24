import styled from "styled-components";
import { Container, NavbarItemsContainer } from "./navbarStyle.js";

const Navbar = () => {
  return (
    <Container>
      <a href="/">
        <img height={30} />
      </a>
      <NavbarItemsContainer>
        <div href="/aquarium">AQUARIUM</div>

        {/* // TODO : Create dropdown component */}
        <div href="/events">EVENTS</div>
        <div href="/account">ACCOUNT</div>
      </NavbarItemsContainer>
    </Container>
  );
};

export default Navbar;
