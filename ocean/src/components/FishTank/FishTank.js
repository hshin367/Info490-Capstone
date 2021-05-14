import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../App";
import Fish from "../Fish/Fish";
import Kelps from "./Kelps/Kelps";
import { CustomizerBox } from "./Customizer/Customizer";
import { AquarButton, AquarBtnImg } from "../Button/button";
import { randomNum } from "../../utils/randomGenerators";
import { Container } from "./style";
import { getFishes } from "../../actions/actions";
import { convertStrToBool } from "../../utils/convertStrToBool";
// import kelp_1 from "../../img/kelp_1.png";
// import kelp_2 from "../../img/kelp_2.png";
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
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const [displayKelps, setDisplayKelps] = useContext(AppContext);
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  useEffect(() => {
    getAllFishes();
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

  let allFishes = fishes.map((fish, index) => {
    return (
      <Fish
        key={index}
        left={fish.leftFish}
        right={fish.rightFish}
        src={fish}
      />
    );
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleKelpCustomzClick = () => {
    setDisplayKelps(!displayKelps);
    window.localStorage.setItem("kelps", !displayKelps);
  };

  let AquarBtn = (
    <AquarButton clicked={isClicked}>
      <AquarBtnImg onClick={handleClick} />
      {isClicked && <CustomizerBox showKelps={handleKelpCustomzClick} />}
    </AquarButton>
  );

  return (
    <Container>
      {allFishes}
      {displayKelps && <Kelps />}
      {props.showCustBtn && AquarBtn}
    </Container>
  );
};

export default FishTank;
