import styled from "styled-components";
import kelpImg from "../../../img/kelp_1.png";

const CustTankItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TankItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TankItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TankItemImg = styled.div`
  background-image: url(${kelpImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  margin-right: ${(props) => props.theme.margins.xxl};
`;

export {
  CustTankItemsContainer,
  TankItemContainer,
  TankItemInfoContainer,
  TankItemImg,
};
