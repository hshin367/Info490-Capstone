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
import { MoreOutlined } from "@ant-design/icons";
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
              MARCH 2021
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
    await sortByDate(allEvents);
    setEvents(allEvents);
    setLoading(false);
    // }
  };

  if (loading) return <TextBox size="title">Loading Data...</TextBox>;

  // TODO : error handle the null data
  return (
    <>
      {events.length === 0 ? (
        <TextBox size="title" color="white">
          You Have no events that you have Registered for!{" "}
        </TextBox>
      ) : (
        <EventBoxesContainer>
          {events.map(
            (singleEvent, ind) =>
              singleEvent !== null && (
                <div key={ind}>
                  <EventBox today={singleEvent.date === "05/March" && true}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
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
              )
          )}
        </EventBoxesContainer>
      )}
    </>
  );
};

export { YourEvents };
