import React, { useState } from "react";
import { convertStrToBool } from "../../../utils/convertStrToBool";
import { TankItemContainer, TankItemInfoContainer, TankItemImg } from "./style";
import { Checkbox } from "antd";

const TankItem = (props) => {
  const [checked, setChecked] = useState(
    convertStrToBool(window.localStorage.getItem("kelps"))
  );

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
