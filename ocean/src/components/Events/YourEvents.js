import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, TextBox } from "../../pages/styles/style.js";
import {
  LocationTime,
  EventBox,
  EventsContainer,
  EventBoxesContainer,
  Circle,
} from "./style.js";
import { MoreOutlined } from "@ant-design/icons";

const YourEvents = () => {
  // Cases: This month and/or the months after.
  // Create components for absolute boxes
  return (
    <>
      <TextBox size="xxxl" color="black" bold>
        YOUR EVENTS
      </TextBox>
      <EventsContainer>
        <div style={{ position: "absolute", top: "-0.45rem" }}>
          <TextBox style={{ padding: "0" }}>MARCH 2021</TextBox>
        </div>
        <Circle />
        <Events />
      </EventsContainer>
    </>
  );
};

const Events = () => {
  const [event, setEvent] = useState("");

  const sampleData = [
    {
      date: "05/March",
      fishType: "JellyFish",
      location: "Madison Park Beach",
      time: "2:30PM - 4:00PM",
    },
    {
      date: "06/March",
      fishType: "JellyFish",
      location: "Madison Park Beach",
      time: "2:30PM - 4:00PM",
    },
  ];

  return (
    <EventBoxesContainer>
      {sampleData.map((singleEvent, ind) => (
        <EventBox today={singleEvent.date === "05/March" && true}>
          <div key={ind}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextBox size="title">{singleEvent.date}</TextBox>
              <MoreOutlined style={{ fontSize: "25px" }} />
            </div>
            <TextBox>{singleEvent.fishType}</TextBox>
            <LocationTime>
              <TextBox>{singleEvent.location}</TextBox>
              <TextBox>{singleEvent.time}</TextBox>
            </LocationTime>
          </div>
        </EventBox>
      ))}
    </EventBoxesContainer>
  );
};

export { YourEvents };
