import React, { useState } from "react";
import { convertStrToBool } from "../../../utils/convertStrToBool";
import {
  TankItemContainer,
  TankItemInfoContainer,
  TankItemImg,
  TankItemTextContainer,
  TankItemText,
} from "./style";
import { Checkbox } from "antd";
import "./tankItem.css";

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
      <TankItemInfoContainer>
        <TankItemImg />
        <TankItemTextContainer>
          <TankItemText type="title">Kelps</TankItemText>
          <TankItemText>Received on : MAY 01, 2021</TankItemText>
        </TankItemTextContainer>
      </TankItemInfoContainer>
      <Checkbox className="tank-item" checked={checked} onChange={onChange} />
    </TankItemContainer>
  );
};

export default TankItem;
