import React, { useState, useEffect, useContext } from "react";
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
import Modals from "../Modals/Modal.js";
import { Row, Col, Checkbox, Form, Button } from "antd";
import UserContext from "../User/User";
import { getEvents, registerForEvent } from "../../actions/actions";
import {
  dateParser,
  dateCalculator,
  sortByDate,
} from "../../helpers/dateCalculations";
import { goingEventsSampleData } from "../../helpers/sampleData";

// TODO : import getDate() from the Banner component later (make it importable)
// TODO : make the text styles of the cards into a styled component
// TODO : Remove the paddings for the textboxes.

const UpcomingEvents = () => {
  // Cases: This month and/or the months after.
  // Create components for absolute boxes

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
  // TODO : depending on the date input format, split("") and create a new date obj.
  // TODO : implement loading
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisble] = useState(false);
  const user = useContext(UserContext);
  const [eventId, setEventId] = useState("");
  const [today, setToday] = useState(Date.now());

  const sampleData = sortByDate(goingEventsSampleData);

  useEffect(() => {
    // getAllEvents("");
    setEvents(sampleData);
  }, []);

  const getAllEvents = async () => {
    let allEvents = await getEvents();
    let sortedEvents = sortByDate(allEvents.data);
    setEvents(sortedEvents);
  };

  const calculateDaysLeft = (today, otherDate) => {
    let parsedDate = dateParser(otherDate);
    let daysleft = dateCalculator(today, parsedDate);
    return daysleft;
  };

  const openModal = (eventId) => {
    setModalVisble(true);
    setEventId(eventId);
  };

  const closeModal = () => {
    setModalVisble(false);
  };

  return (
    <EventBoxesContainer>
      {events.map((singleEvent) => {
        return (
          <div key={singleEvent.eventId}>
            <EventBox upcoming>
              <Row>
                <Col span={12}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TextBox size="title">{singleEvent.date}</TextBox>
                  </div>
                  <TextBox light padding="sm" size="large">
                    {singleEvent.name}
                  </TextBox>
                  <TextBox light padding="sm" size="md">
                    {singleEvent.fish}
                  </TextBox>
                  <LocationTime>
                    <TextBox size="xs">
                      {singleEvent.location}, {singleEvent.city}
                    </TextBox>
                    <TextBox size="xs">
                      {singleEvent.startTime} - {singleEvent.endTime}
                    </TextBox>
                  </LocationTime>
                </Col>

                {/* TODO : Right side of the Event card - refactor later */}
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
                        {calculateDaysLeft(today, singleEvent.date)}
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
                    <DarkBlueButton onClick={openModal}>
                      REGISTER
                    </DarkBlueButton>
                    <EventRegistrationModal
                      visible={modalVisible}
                      closeModal={closeModal}
                      eventId={eventId}
                    />
                  </Row>
                </Col>
              </Row>
            </EventBox>
          </div>
        );
      })}
    </EventBoxesContainer>
  );
};

// TODO : check the validity of the forms (if checkbox all selected )
const EventRegistrationModal = ({ visible, closeModal, eventId }) => {
  const register = () => {
    const res = registerForEvent(eventId);
    console.log(res);
  };

  return (
    <Modals
      title="Event Registration Agreement"
      visible={visible}
      closeModal={closeModal}
      okText="Register"
      onOk={register}
      destroyOnClose={true}
    >
      <EventRegistrationAgreementForm />
    </Modals>
  );
};

// TODO: include href for the Policies
const EventRegistrationAgreementForm = () => {
  return (
    <Form>
      <Form.Item
        name="event-checkbox-privacy"
        rules={[{ required: true, message: "Please Agree to the Policy!" }]}
      >
        <Checkbox.Group>
          <Checkbox value="PrivacyPolicy">
            I agree to the Terms or Service and Privacy Policy
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        name="event-checkbox-cleanup"
        rules={[{ required: true, message: "Please Agree to the Policy!" }]}
      >
        <Checkbox.Group>
          <Checkbox value="CleanupPolicy">
            I have read and educated myself on the Cleanup Policies
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};

export default UpcomingEvents;
