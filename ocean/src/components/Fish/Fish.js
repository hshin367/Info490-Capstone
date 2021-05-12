import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { randomNum, randomDir } from "../../utils/randomGenerators.js";
import "./fish.css";
import clownFishImgLeft from "./../../img/clownFish_left.png";
import clownFishImgRight from "./../../img/clownFish_right.png";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const imageSize = 50;

const Fish = (props) => {
  const [xPos, setXPos] = useState(randomNum(0, windowWidth - imageSize));
  const [yPos, setyPos] = useState(randomNum(0, windowHeight - imageSize));
  const [xDir, setXDir] = useState(randomDir);
  const [src, setSrc] = useState("ocean/src/img/");
  const [transformation, setTransformation] = useState("scaleX(1)");

  const changeFishDir = () => {
    let newYPos = randomNum(imageSize, windowHeight - imageSize);
    let newXPos = randomNum(30, windowWidth - imageSize);

    setXDir(!xDir);
    // console.log(xDir);
    if (xDir === true) {
      newXPos = randomNum(xPos, windowWidth - imageSize);
    } else {
      // console.log(`current XPos = ${xPos}`);
      // console.log(`random `);
      newXPos = randomNum(0, xPos);
    }
    // console.log(newXPos);
    setXPos(newXPos);
    setyPos(newYPos);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      changeFishDir();
      console.log("useEffect");
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(changeFishDir, 9050);

    return () => {
      clearTimeout(timer);
    };
  }, [xPos, yPos]);

  let fishStyle = {
    position: "absolute",
    left: xPos,
    top: yPos,
    height: imageSize,
  };

  return (
    <>
      <img
        className={`fishImg`}
        style={fishStyle}
        src={xDir ? `${props.left}` : `${props.right}`}
        // src={xDir ? `${fishImg}` : `${flippedFish}`}
        alt="fish"
      />
    </>
  );
};

export default Fish;
