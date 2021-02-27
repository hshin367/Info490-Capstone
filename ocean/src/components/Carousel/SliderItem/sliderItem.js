import React from "react";
import styled from "styled-components";
import data from "./data.js";
import { MainContent, Flex } from "./style.js";

const SliderItem = (props) => {
  return (
    <Flex>
      <div>Today</div>
      {/* Main content component */}
      {data.map((singleEvent, ind) => (
        <div>
          <MainContent>
            <h1>{singleEvent.title}</h1>
            <p>{singleEvent.date}</p>
            <p>{singleEvent.descr}</p>
          </MainContent>
        </div>
      ))}
      {/* InfoContent */}
      <div>
        <div>18 days left</div>
      </div>
    </Flex>
  );
};

export default SliderItem;
