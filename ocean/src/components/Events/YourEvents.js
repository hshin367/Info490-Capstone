import React, { useState, useEffect } from "react";
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
import { getGoingEvents } from "../../actions/actions";

const YourEvents = () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

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
        <Events token={userToken} />
      </EventsContainer>
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
    let sampleData = [
      {
        city: "Seattle",
        commentCount: 0,
        contactNumber: "(206)601-0607",
        createdAt: "2021-03-01T01:18:18.380Z",
        date: "1/1/2021",
        description: "Let's clean our coasts!",
        endTime: "1:00PM",
        fish: "clownfish",
        goingCount: 1,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/restore-uw.appspot.com/o/no-img.png?alt=media",
        interestedCount: 0,
        location: "Alki Beach",
        name: "Coastal Cleanup Event",
        organizerName: "Fish Student Association",
        startTime: "10:00AM",
        state: "WA",
        userHandle: "ThomasHandleIMG13",
        zipCode: 98144,
      },
    ];
    let allEvents = await getGoingEvents();
    if (Array.isArray(allEvents) === false) {
      // setEvents(sampleData);
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
