import React, { useEffect, useState } from "react";
import { randomNum } from "../../../utils/randomGenerators";
import { windowWidth } from "../../../constants/windowInformation";
import { Kelp } from "../style";
import kelp_1 from "../../../img/kelp_1.png";
import kelp_2 from "../../../img/kelp_2.png";

const Kelps = () => {
  const [kelpData, setKelpData] = useState([]);

  useEffect(() => {
    kelpsGenerator(5);
  }, []);

  const kelpsGenerator = (num) => {
    let kelpsData = [];
    for (let index = 0; index < num; index++) {
      let randomImageNumber = randomNum(1, 2);
      let randomxPos = randomNum(0, windowWidth);
      let randomYPos = randomNum(-50, 0);
      kelpsData.push({
        left: randomxPos,
        bottom: randomYPos,
        imgNum: randomImageNumber,
      });
    }
    setKelpData(kelpsData);
  };

  let kelps = kelpData.map((kelp, ind) => {
    let imgSrc = "";
    switch (kelp.imgNum) {
      case 1:
        imgSrc = kelp_1;
        break;
      case 2:
        imgSrc = kelp_2;
        break;
      default:
        imgSrc = kelp.imgNum;
        break;
    }

    return (
      <Kelp
        key={ind}
        src={imgSrc}
        left={kelp.left}
        bottom={kelp.bottom}
        alt="kelp_4"
      />
    );
  });

  return <>{kelps}</>;
};

export default Kelps;
