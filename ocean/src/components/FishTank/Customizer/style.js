import styled from "styled-components";
import kelpImg from "../../../img/kelp_1.png";

const CustTankItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TankItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const TankItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
`;

const TankItemText = styled.div`
  font-size: ${(props) =>
    props.type === "title"
      ? props.theme.fontSizes.lg
      : props.theme.fontSizes.xs};

  font-weight: ${(props) => (props.type === "title" ? 600 : 100)};
`;

export {
  CustTankItemsContainer,
  TankItemContainer,
  TankItemInfoContainer,
  TankItemImg,
  TankItemTextContainer,
  TankItemText,
};
