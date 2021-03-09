import React, { useState } from "react";
import { Flex, TextBox } from "../../pages/styles/style.js";
import {
  LocationTime,
  EventBox,
  EventsContainer,
  EventBoxesContainer,
  Circle,
  CircleCounter,
  TitleBarContainer,
} from "./style.js";
import SearchBar from "../../components/InputForms/SearchBar.js";
import { DarkBlueButton } from "../Button/button.js";

import { Row, Col } from "antd";

// TODO : import getDate() from the Banner component later (make it importable)
// TODO : make the text styles of the cards into a styled component
// TODO : Remove the paddings for the textboxes.

const getDate = () => {
  let tempDate = new Date();
  let date = tempDate.getDate();
  let month = tempDate.getMonth() + 1;

  return [date, month];
};

// TODO : check the incoming date format, handle split, convert to array maybe?
// create new date obj.
const makeJSDateObject = (date) => {
  new Date(date);
};

const dateCalculator = (curDate, eventDate) => {
  let dateDiff = eventDate.getTime() - curDate.getTime();

  return Math.floor(dateDiff / (1000 * 60 * 60 * 24));
};

const UpcomingEvents = () => {
  // Cases: This month and/or the months after.
  // Create components for absolute boxes
  const [today, setToday] = useState(Date.now());

  return (
    <>
      <TitleBarContainer>
        <TextBox size="xxxl" color="black" bold>
          UPCOMING EVENTS
        </TextBox>
        <div style={{ paddingRight: "3rem" }}>
          <SearchBar />
        </div>
      </TitleBarContainer>
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
  // depending on the date input format, split("") and create a new date obj.
  const sampleData = [
    {
      date: "25/March",
      fishType: "Shark",
      location: "Madison Park Beach",
      time: "2:30PM - 4:00PM",
      interested: 12,
      friendsGoing: 3,
      daysLeft: 20,
    },
    {
      date: "26/March",
      fishType: "Eel",
      location: "Madison Park Beach",
      time: "2:30PM - 4:00PM",
      interested: 12,
      friendsGoing: 3,
      daysLeft: 21,
    },
  ];

  return (
    <EventBoxesContainer>
      {sampleData.map((singleEvent, ind) => (
        <div key={ind}>
          <EventBox upcoming>
            <Row>
              <Col span={12}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <TextBox size="title">{singleEvent.date}</TextBox>
                </div>
                <TextBox light size="large">
                  {singleEvent.fishType}
                </TextBox>
                <LocationTime>
                  <TextBox size="xs">{singleEvent.location}</TextBox>
                  <TextBox size="xs">{singleEvent.time}</TextBox>
                </LocationTime>
              </Col>

              {/* Right side of the Event card  */}
              <Col
                span={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "15px",
                }}
              >
                <Row>
                  <CircleCounter small>
                    <TextBox
                      size="xs"
                      style={{
                        padding: "0",
                      }}
                    >
                      {singleEvent.daysLeft}
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
                </Row>
                <Row>
                  <DarkBlueButton>REGISTER</DarkBlueButton>
                </Row>
              </Col>
            </Row>
          </EventBox>
        </div>
      ))}
    </EventBoxesContainer>
  );
};

export default UpcomingEvents;
