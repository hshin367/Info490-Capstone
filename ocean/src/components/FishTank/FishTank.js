import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Fish from "../Fish/Fish";
import { CustomizerBox } from "./Customizer/Customizer";
import { AquarButton, AquarBtnImg } from "../Button/button";
import { randomNum } from "../../utils/randomGenerators";
import { Kelp, Container } from "./style";
import { getFishes } from "../../actions/actions";
import kelp_1 from "../../img/kelp_1.png";
import kelp_2 from "../../img/kelp_2.png";
import "./fish_tank.css";

import clownFishImgLeft from "./../../img/clownFish_left.png";
import clownFishImgRight from "./../../img/clownFish_right.png";
import smallLinedFishLeft from "./../../img/small_linedFishLeft.png";
import smallLinedFishRight from "./../../img/small_linedFishRight.png";
import largeLinedFishRight from "./../../img/large_linedFishRight.png";
import largeLinedFishLeft from "./../../img/large_linedFishLeft.png";

const fishSampleData = [
  {
    left: clownFishImgLeft,
    right: clownFishImgRight,
  },
  {
    left: clownFishImgLeft,
    right: clownFishImgRight,
  },
  {
    left: smallLinedFishLeft,
    right: smallLinedFishRight,
  },
  {
    left: smallLinedFishLeft,
    right: smallLinedFishRight,
  },
  {
    left: largeLinedFishLeft,
    right: largeLinedFishRight,
  },
];

const fishesSampleData2 = [
  {
    type: "clownFish",
    left: clownFishImgLeft,
    right: clownFishImgRight,
    count: 2,
  },
  {
    type: "linedFish",
    left: largeLinedFishLeft,
    right: largeLinedFishRight,
    count: 2,
  },
];

const FishTank = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fishes, setFishes] = useState([]);
  const [kelpData, setKelpData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const kelpImgSrc = "../../img/kelp_";

  useEffect(() => {
    getAllFishes();
    kelpsGenerator(5);
  }, []);

  const getAllFishes = async () => {
    const allFishes = await getFishes();

    if (!allFishes) {
      setLoading(false);
      console.log("did not get the fish");
    } else {
      setLoading(false);
      console.log(allFishes);
      setFishes(allFishes);
    }
  };

  /*
  const groupByFishType = fishes.reduce((obj, fishType) => {
    console.log(fishes);
    console.log("object");
    console.log(obj);
    // let newArr = [];
    obj["fishName"] = (obj[fishType] || 0) + 1;
    // newArr.push(obj[fishType.fishName]);
    // { [fishType.fishName]: count + 1 }
    return obj;
  }, []);

  const newFish = () => {
    for (let i = 0; i < fishes.length; i++) {
      const element = fishes[i];
      console.log(element);
    }
  };

  newFish();
  */

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

  let allFishes = fishSampleData.map((fish, index) => {
    return <Fish key={index} left={fish.left} right={fish.right} src={fish} />;
  });

  let kelps = kelpData.map((kelp) => {
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
      <Kelp src={imgSrc} left={kelp.left} bottom={kelp.bottom} alt="kelp_4" />
    );
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  let AquarBtn = (
    <AquarButton clicked={isClicked}>
      <AquarBtnImg onClick={handleClick} />
      {isClicked && <CustomizerBox />}
    </AquarButton>
  );

  return (
    <Container>
      {allFishes}
      {kelps}
      {props.showCustBtn && AquarBtn}
    </Container>
  );
};

export default FishTank;
