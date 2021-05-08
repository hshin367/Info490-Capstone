import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Blur, Flex, TextBox } from "../../pages/styles/style.js";
import {
  LocationTime,
  EventBox,
  EventsContainer,
  EventBoxesContainer,
  ScrollableContainer,
  Circle,
  Container,
} from "./style.js";
import MoreDetails from "../DropDownMenu/MoreDetail";
import { getGoingEvents } from "../../actions/actions";
import { goingEvents, goingEventsSampleData } from "../../utils/sampleData";
import { sortByDate } from "../../utils/dateCalculations";

const YourEvents = () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  // Cases: This month and/or the months after.
  // Create components for absolute boxes
  // TODO : set the default text color to white
  return (
    <>
      <TextBox size="xxxl" color="white" semibold>
        YOUR EVENTS
      </TextBox>
      <ScrollableContainer>
        <EventsContainer>
          <div style={{ position: "absolute", top: "-0.45rem" }}>
            <TextBox
              style={{ padding: "0", letterSpacing: "0.15em" }}
              color="white"
            >
              MAY 2021
            </TextBox>
          </div>
          <Circle />
          <Events token={userToken} />
        </EventsContainer>
      </ScrollableContainer>
    </>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // TODO : refactor later
  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    // let sampleData = goingEventsSampleData;
    // commented out for the dev. for now.
    let allEvents;
    allEvents = await getGoingEvents();
    // if (Array.isArray(allEvents) === false) {
    //   console.log("sample going data");
    //   await sortByDate(sampleData);
    //   setEvents(sampleData);
    // } else {
    if (!allEvents) {
      setLoading(false);
      return (
        <TextBox size="title" color="white">
          You Have no events that you have Registered for
        </TextBox>
      );
    }
    let sortedEvents = await sortByDate(allEvents);
    setEvents(sortedEvents);
    setLoading(false);
    // }
  };

  if (loading) return <TextBox size="title">Loading Data...</TextBox>;

  // TODO: refactor TEXTBOX
  let allEvents = events.map((singleEvent, ind) => {
    let date = new Date(singleEvent.date);
    return (
      singleEvent !== null && (
        <div key={ind}>
          <EventBox today={singleEvent.date === "04/May" && true}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 0,
              }}
            >
              <TextBox
                size="title"
                paddingLeft="xs"
                padding="none"
                paddingTop="none"
              >
                {date.getDay()}
              </TextBox>
              <MoreDetails text={["Remove Event", "Invite Friends"]} />
            </div>
            <TextBox
              size="xs"
              paddingLeft="xs"
              paddingTop="none"
              padding="xs"
              semibold
            >
              {months[date.getMonth() + 1].toUpperCase()}
            </TextBox>
            {/* <TextBox padding="xs">{singleEvent.name}</TextBox> */}
            <TextBox paddingTop="xl" paddingLeft="xs" light>
              {singleEvent.fish}
            </TextBox>
            <LocationTime>
              <TextBox size="xs" paddingTop="xl" padding="xs" paddingLeft="xs">
                {singleEvent.location}
              </TextBox>
              <TextBox size="xs" paddingTop="xs" padding="xs" paddingLeft="xs">
                {singleEvent.startTime} - {singleEvent.endTime}
              </TextBox>
            </LocationTime>
          </EventBox>
        </div>
      )
    );
  });

  // TODO : error handle the null data
  return (
    <>
      {events.length === 0 ? (
        <TextBox size="title" color="white">
          You Have no events that you have Registered for!{" "}
        </TextBox>
      ) : (
        <EventBoxesContainer>{allEvents}</EventBoxesContainer>
      )}
    </>
  );
};

export { YourEvents };
