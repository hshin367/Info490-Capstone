import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: ${theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: black;

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

export { Container };
