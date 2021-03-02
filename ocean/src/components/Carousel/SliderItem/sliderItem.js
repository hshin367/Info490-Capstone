import React from "react";
import styled from "styled-components";
import data from "./data.js";
import { MainContent, Flex } from "./style.js";
import { WhiteButton } from "../.././Button/button.js";

const SliderItem = (props) => {
  return (
    <Flex>
      {/* Main content component */}
      {data.map((singleEvent, ind) => (
        <MainContent key={ind}>
          <h1>{singleEvent.title}</h1>
          <p>{singleEvent.date}</p>
          <p>{singleEvent.descr}</p>
          <WhiteButton>Register</WhiteButton>
          <WhiteButton>Share</WhiteButton>
        </MainContent>
      ))}
      {/* InfoContent */}
      <div>
        <div>18 days left</div>
      </div>
    </Flex>
  );
};

export default SliderItem;
