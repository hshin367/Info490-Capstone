import React, { useEffect } from "react";
import TankItem from "./TankItem";
import { CustTankItemsContainer } from "./style";

const Customizer = () => {};

const CustomizerBox = (props) => {
  return (
    <CustTankItemsContainer>
      <TankItem showKelps={props.showKelps} />
    </CustTankItemsContainer>
  );
};

export { CustomizerBox, Customizer };
