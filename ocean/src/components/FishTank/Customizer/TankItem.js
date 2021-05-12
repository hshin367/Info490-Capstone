import React, { useState } from "react";
import kelpImg from "../../../img/kelp_1.png";
import { TankItemContainer, TankItemInfoContainer, TankItemImg } from "./style";
import { Checkbox } from "antd";

const TankItem = (props) => {
  const [checked, setChecked] = useState(true);

  const onChange = (e) => {
    setChecked(!checked);
    props.showKelps();
  };

  return (
    <TankItemContainer>
      <TankItemImg />
      <TankItemInfoContainer>
        <div>Kelps</div>
        <div>date</div>
        <Checkbox checked={checked} onChange={onChange} />
      </TankItemInfoContainer>
    </TankItemContainer>
  );
};

export default TankItem;
