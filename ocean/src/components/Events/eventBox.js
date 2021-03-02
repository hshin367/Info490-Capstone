import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, TextBox } from "../../pages/styles/style.js";
import { LocationTime, EventBoxContainer } from "./style.js";
import { MoreOutlined } from "@ant-design/icons";

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
    <Flex>
      {sampleData.map((singleEvent, ind) => (
        <EventBoxContainer today={singleEvent.date == "05/March" && true}>
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
        </EventBoxContainer>
      ))}
    </Flex>
  );
};

export default Events;
