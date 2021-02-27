import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NavbarWrapper = styled.div`
  color: ${theme.colors.white};
  position: fixed;
  z-index: 1030;

  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.sizes.xs}) {
    padding-left: 25px;
    padding-right: 23px;
  }
  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    max-width: ${({ theme }) => theme.sizes.m};
  }
  @media (min-width: ${({ theme }) => theme.sizes.m}) {
    max-width: ${({ theme }) => theme.sizes.l};
  }
  @media (min-width: ${({ theme }) => theme.sizes.l}) {
    padding-left: 50px;
    padding-right: 50px;
    max-width: 1300px;
  }
`;

const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

const NavItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: ${theme.colors.white};
  a {
    color: ${theme.colors.white};
  }
  font-size: ${theme.fontSizes.xl};
`;

export { Container, NavbarItemsContainer, NavItem, NavbarWrapper };
