import React from "react";
import PropTypes from "prop-types";
import { Image } from "./style.js";

const Fish = () => {
  const sampleData = [
    {
      date: "January 21, 2021",
      fishType: "JellyFish",
      img: "Real-clownfish.jpg",
    },
  ];

  return (
    <div>
      <Image url="Real-clownfish.jpg" />
    </div>
  );
};

export default Fish;
