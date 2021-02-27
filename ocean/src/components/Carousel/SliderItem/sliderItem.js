import React from "react";
import styled from "styled-components";
import data from "./data.js";
import { MainContent, Flex } from "./style.js";

const SliderItem = (props) => {
  return (
    <Flex>
      {/* Main content component */}
      {data.map((singleEvent, ind) => (
        <MainContent key={ind}>
          <h1>{singleEvent.title}</h1>
          <p>{singleEvent.date}</p>
          <p>{singleEvent.descr}</p>
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
