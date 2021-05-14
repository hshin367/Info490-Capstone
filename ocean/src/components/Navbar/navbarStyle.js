import styled from "styled-components";
import theme from "../../theme";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  background-color: "lightblue";
  position: fixed;
  width: 100vw;
  z-index: 1030;
`;

const NavbarWrapper = styled.div`
  color: ${theme.colors.white};
  position: relative;
  z-index: 1030;
  width: 1300px;
  padding: 10px 25px;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // @media (min-width: ${({ theme }) => theme.sizes.xs}) {
  // }
  // @media (min-width: ${({ theme }) => theme.sizes.sm}) {
  //   // max-width: ${({ theme }) => theme.sizes.m};
  // }
  // @media (min-width: ${({ theme }) => theme.sizes.m}) {
  //   // max-width: ${({ theme }) => theme.sizes.l};
  // }
  // @media (min-width: ${({ theme }) => theme.sizes.l}) {
  // }
`;

// TODO : fix the padding later with the Flxbox.
const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding-left: 5%;
`;

const NavItem = styled.li`
  text-decoration: none;
  list-style: none;
  padding: ${(props) => (props.padding ? props.padding : "0 20px")};
  color: ${theme.colors.white};
  a {
    color: ${theme.colors.white};
  }
  font-size: ${theme.fontSizes.xl};

  &:hover {
    cursor: pointer;
  }
`;

export { Container, NavbarItemsContainer, NavItem, NavbarWrapper };
