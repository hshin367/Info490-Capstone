import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Fish from "../Fish/Fish";
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

const FishTank = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fish, setFish] = useState([]);
  const [kelpData, setKelpData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const kelpImgSrc = "../../img/kelp_";

  useEffect(() => {
    getAllFishes();
    kelpsGenerator(5);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeigh);
  };

  let sampleData = [
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

  const getAllFishes = async () => {
    const allFishes = await getFishes();

    if (!allFishes) {
      setLoading(false);
      console.log("did not get the fish");
    } else {
      setLoading(false);
      console.log("got the fish");
      console.log(allFishes);
      setFish(allFishes);
    }
  };

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

  let fishes = sampleData.map((fish) => {
    return <Fish left={fish.left} right={fish.right} src={fish} />;
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

  return (
    <Container>
      {fishes}
      {kelps}
    </Container>
  );
};

export default FishTank;
