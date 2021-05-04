import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./fish.css";
import fishImg from "./../../img/clownFish.png";
import flippedFish from "./../../img/Real-Clownfish.png";

const Fish = (props) => {
  // TODO: move to util.
  // max inclusive 0 ~ 10, then includes 10 in ranNum
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // left or right
  const randomDir = () => {
    // true = right or bottom
    // false = left or top
    let dir = randomNum(0, 1) === 1 ? true : false;

    return dir;
  };

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const imageSize = 50;

  const [xPos, setXPos] = useState(randomNum(0, windowWidth - imageSize));
  const [yPos, setyPos] = useState(randomNum(0, windowHeight - imageSize));
  const [xDir, setXDir] = useState(randomDir);
  const [src, setSrc] = useState("./../../img/");
  const [transformation, setTransformation] = useState("scaleX(1)");

  const changeFishDir = () => {
    let newYPos = randomNum(imageSize, windowHeight - imageSize);
    let newXPos = randomNum(30, windowWidth - imageSize);

    setXDir(!xDir);
    // console.log(xDir);
    if (xDir === true) {
      while (newXPos <= xPos) {
        newXPos = randomNum(0, windowWidth - imageSize);
      }
    } else {
      // console.log(`current XPos = ${xPos}`);
      while (newXPos >= xPos) {
        // console.log(`random `);
        newXPos = randomNum(30, windowWidth - imageSize);
      }
    }
    // console.log(newXPos);
    setXPos(newXPos);
    setyPos(newYPos);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      changeFishDir();

      return () => {
        clearTimeout(timer);
      };
    }, 100);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeFishDir();
    }, 9050);

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
        src={xDir ? `${props.src}` : `${props.src}`}
        // src={xDir ? `${fishImg}` : `${flippedFish}`}
        alt="fish"
      />
    </>
  );
};

export default Fish;
