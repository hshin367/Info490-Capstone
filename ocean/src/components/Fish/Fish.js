import React from "react";
import PropTypes from "prop-types";
import { FishImage, FishText, FishTextContainer } from "./style.js";

const FishPictureText = (props) => {
  console.log(props.fish.date);
  return (
    <FishTextContainer>
      <FishText>{props.fish.date}</FishText>
      <FishText size="name">{props.fish.fishType}</FishText>
    </FishTextContainer>
  );
};

const Fish = () => {
  let sampleData = [
    {
      date: "January 21, 2021",
      fishType: "JellyFish",
      imgName: "Real-clownfish.jpg",
    },
  ];

  return (
    <div>
      {sampleData.map((fish) => (
        <>
          <FishImage url={fish.imgName}>
            <FishPictureText fish={fish} />
          </FishImage>
        </>
      ))}
    </div>
  );
};

export default Fish;
