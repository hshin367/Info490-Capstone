import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import {
  LocationTime,
  EventBox,
  EventsContainer,
  EventBoxesContainer,
  ScrollableContainer,
  Circle,
} from "./style.js";
import { MoreOutlined } from "@ant-design/icons";
import { getGoingEvents } from "../../actions/actions";
import { goingEvents, goingEventsSampleData } from "../../helpers/sampleData";

const YourEvents = () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  // Cases: This month and/or the months after.
  // Create components for absolute boxes
  return (
    <>
      <TextBox size="xxxl" color="black" bold>
        YOUR EVENTS
      </TextBox>
      <ScrollableContainer>
        <EventsContainer>
          <div style={{ position: "absolute", top: "-0.45rem" }}>
            <TextBox style={{ padding: "0" }}>MARCH 2021</TextBox>
          </div>
          <Circle />
          <Events token={userToken} />
        </EventsContainer>
      </ScrollableContainer>
    </>
  );
};

const Events = ({ token }) => {
  const [events, setEvents] = useState([]);

  // TODO : refactor later
  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    let sampleData = goingEventsSampleData;
    // commented out for the dev. for now.
    let allEvents;
    // allEvents = await getGoingEvents();
    if (Array.isArray(allEvents) === false) {
      console.log("sample going data");
      setEvents(sampleData);
    } else {
      console.log(allEvents);
      setEvents(allEvents);
    }
  };

  return (
    <EventBoxesContainer>
      {events.map((singleEvent, ind) => (
        <div key={ind}>
          <EventBox today={singleEvent.date === "05/March" && true}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextBox size="title">{singleEvent.date}</TextBox>
              <MoreOutlined style={{ fontSize: "25px" }} />
            </div>
            <TextBox padding="sm">{singleEvent.name}</TextBox>
            <TextBox padding="sm">{singleEvent.fish}</TextBox>
            <LocationTime>
              <TextBox size="xs" padding="sm">
                {singleEvent.location}
              </TextBox>
              <TextBox size="xs" padding="sm">
                {singleEvent.startTime} - {singleEvent.endTime}
              </TextBox>
            </LocationTime>
          </EventBox>
        </div>
      ))}
    </EventBoxesContainer>
  );
};

export { YourEvents };
