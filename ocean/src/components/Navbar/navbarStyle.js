import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: ${theme.colors.white};
  position: fixed;
  z-index: 1030;

  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.deviceSizes.xs}) {
    padding-left: 25px;
    padding-right: 23px;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.sm}) {
    max-width: ${({ theme }) => theme.deviceSizes.m};
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.m}) {
    max-width: ${({ theme }) => theme.deviceSizes.l};
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.l}) {
    max-width: 90vw;
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

export { Container, NavbarItemsContainer, NavItem };
