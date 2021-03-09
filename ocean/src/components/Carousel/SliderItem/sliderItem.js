import React from "react";
import styled from "styled-components";
import data from "./data.js";
import { MainContent, Flex } from "./style.js";
import { WhiteButton } from "../.././Button/button.js";
import { Button } from "antd";

const SliderItem = (props) => {
  return (
    <Flex>
      {/* Main content component */}
      {data.map((singleEvent, ind) => (
        <MainContent key={ind}>
          <h1>{singleEvent.title}</h1>
          <p>{singleEvent.date}</p>
          <p>{singleEvent.descr}</p>
          {/* TODO: fix this later. */}
          <div style={{ display: "inline", paddingRight: "20px" }}>
            <WhiteButton>Register</WhiteButton>
          </div>

          <Button ghost>Share</Button>
        </MainContent>
      ))}
      {/* InfoContent */}
      <div>
        <div>15 days left</div>
      </div>
    </Flex>
  );
};

export default SliderItem;
