import React from "react";
import { bannerEventSampleData } from "../../../utils/sampleData";
import { MainContent, Flex } from "./style.js";
import { TextBox } from "../../../pages/styles/style";
import { WhiteButton } from "../.././Button/button.js";
import { Button } from "antd";
import { CircleCounter } from "../../Events/style.js";
import { dateParser, dateCalculator } from "../../../utils/dateCalculations";

// TODO : refactor CircleCounter into a component with tb
const InfoContent = ({ date, interested, going }) => {
  const calculateDaysLeft = (date) => {
    let parsedDate = dateParser(date);
    let daysleft = dateCalculator(Date.now(), parsedDate);
    return daysleft;
  };

  return (
    <>
      <CircleCounter white small>
        <TextBox
          size="xs"
          style={{
            padding: "0",
          }}
        >
          {calculateDaysLeft(date)}
        </TextBox>
        <TextBox
          size="xs"
          style={{
            padding: "0",
          }}
        >
          days left
        </TextBox>
      </CircleCounter>
      <CircleCounter white small>
        <TextBox
          size="xs"
          style={{
            padding: "0",
          }}
        >
          {interested}
        </TextBox>
        <TextBox
          size="xs"
          style={{
            padding: "0",
          }}
        >
          interested
        </TextBox>
      </CircleCounter>
      <CircleCounter white small>
        <TextBox
          size="xs"
          style={{
            padding: "0",
          }}
        >
          {going}
        </TextBox>
        <TextBox
          size="xs"
          style={{
            padding: "0",
          }}
        >
          going
        </TextBox>
      </CircleCounter>
    </>
  );
};

const SliderItem = (props) => {
  return (
    <>
      {/* Main content component */}
      {bannerEventSampleData.map((singleEvent, ind) => (
        <Flex key={ind}>
          <MainContent key={ind}>
            <h1>{singleEvent.title}</h1>
            <p>{singleEvent.date}</p>
            <p>{singleEvent.descr}</p>
            {/* TODO: change inline css to styled comp. later. */}
            <div style={{ display: "inline", paddingRight: "20px" }}>
              <WhiteButton>Register</WhiteButton>
            </div>

            <Button ghost>Share</Button>
          </MainContent>

          <InfoContent
            date={singleEvent.date}
            interested={singleEvent.interestedCount}
            going={singleEvent.goingCount}
          />
        </Flex>
      ))}
      {/* InfoContent */}
    </>
  );
};

export default SliderItem;
