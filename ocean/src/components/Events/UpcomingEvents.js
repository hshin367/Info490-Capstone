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
import { ShareAltOutlined, StarOutlined } from "@ant-design/icons";
import UserContext from "../User/User";
import { getEvents, registerForEvent } from "../../actions/actions";
import {
  dateParser,
  dateCalculator,
  sortByDate,
} from "../../helpers/dateCalculations";
import { upcomingEventsSampleData } from "../../helpers/sampleData";
import Search from "antd/lib/transfer/search";

// TODO : import getDate() from the Banner component later (make it importable)
// TODO : make the text styles of the cards into a styled component
// TODO : Remove the paddings for the textboxes.

const UpcomingEvents = () => {
  // Cases: This month and/or the months after.
  // Create components for absolute boxes
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e);
  };

  return (
    <>
      <TitleBarContainer>
        <TextBox size="xxxl" color="black" bold>
          UPCOMING EVENTS
        </TextBox>
        <div style={{ paddingRight: "3rem" }}>
          <SearchBar handleChange={handleChange} />
        </div>
      </TitleBarContainer>
      <EventsContainer>
        <div style={{ position: "absolute", top: "-0.45rem" }}>
          <TextBox style={{ padding: "0" }}>MARCH 2021</TextBox>
        </div>
        <Circle />
        <Events searchTerm={searchTerm} />
      </EventsContainer>
    </>
  );
};

const Events = ({ searchTerm }) => {
  // TODO : depending on the date input format, split("") and create a new date obj.
  // TODO : implement loading
  const [events, setEvents] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [modalVisible, setModalVisble] = useState(false);
  const [eventId, setEventId] = useState("");
  const [today, setToday] = useState(Date.now());
  const [loading, setLoading] = useState(true);
  const user = useContext(UserContext);

  const sampleData = sortByDate(upcomingEventsSampleData);

  useEffect(() => {
    getAllEvents();
    // setEvents(sampleData);
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      renderSearchResult();
    } else {
      // in prod. there would be events
      // in dev. there would be sampleD
      setSearchResult(events);
    }
  }, [searchTerm]);

  const getAllEvents = async () => {
    let allEvents = await getEvents("");
    let sortedEvents = sortByDate(allEvents.data);
    setEvents(sortedEvents);
    setSearchResult(sortedEvents);
    setLoading(false);
  };

  const calculateDaysLeft = (today, otherDate) => {
    let parsedDate = dateParser(otherDate);
    let daysleft = dateCalculator(today, parsedDate);
    return daysleft;
  };

  const openModal = (eid) => {
    setModalVisble(true);
    setEventId(eid);
  };

  const closeModal = () => {
    setModalVisble(false);
  };

  // searches for event names
  const renderSearchResult = () => {
    let searchResult = events.filter((event) => {
      const nameIndex = event.name
        ? event.name.toLowerCase().indexOf(searchTerm.toLowerCase())
        : "";
      return nameIndex > -1;
    });
    setSearchResult(searchResult);
  };

  if (loading) return <TextBox size="title">Loading Data...</TextBox>;

  // TODO : refactor; isSearchEmpty on state on parent
  return (
    <>
      {searchResult.length === 0 ? (
        <TextBox size="title">No search Result </TextBox>
      ) : (
        <EventBoxesContainer>
          {searchResult.map((singleEvent) => {
            return (
              <div key={singleEvent.eventId}>
                <EventBox upcoming>
                  <Row justify="space-between">
                    <Col span={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
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
                    {/* TODO : fix the justifyContent for the card */}
                    <Col
                      span={12}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        paddingTop: "5px",
                      }}
                    >
                      <Row gutter={13}>
                        <Col span={8}>
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
                        </Col>
                        <Col span={8}>
                          <CircleCounter small>
                            <TextBox
                              size="xs"
                              style={{
                                padding: "0",
                              }}
                            >
                              {singleEvent.interestedCount}
                            </TextBox>
                            <TextBox
                              size="xs"
                              style={{
                                padding: "0",
                              }}
                            >
                              Interested
                            </TextBox>
                          </CircleCounter>
                        </Col>
                        <Col span={8}>
                          <CircleCounter small>
                            <TextBox
                              size="xs"
                              style={{
                                padding: "0",
                              }}
                            >
                              {singleEvent.goingCount}
                            </TextBox>
                            <TextBox
                              size="xs"
                              style={{
                                padding: "0",
                              }}
                            >
                              Going
                            </TextBox>
                          </CircleCounter>
                        </Col>
                      </Row>
                      <Row justify="space-around" gutter={13}>
                        <Col span={5}>
                          <DarkBlueButton>
                            <StarOutlined />
                          </DarkBlueButton>
                        </Col>
                        <Col span={5}>
                          <DarkBlueButton>
                            <ShareAltOutlined />
                          </DarkBlueButton>
                        </Col>
                        <Col span={12}>
                          <DarkBlueButton
                            onClick={() => openModal(singleEvent.eventId)}
                          >
                            REGISTER
                          </DarkBlueButton>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <EventRegistrationModal
                    visible={modalVisible}
                    closeModal={closeModal}
                    eventId={eventId}
                  />
                </EventBox>
              </div>
            );
          })}
        </EventBoxesContainer>
      )}
    </>
  );
};

// TODO : check the validity of the forms (if checkbox all selected )
const EventRegistrationModal = ({ visible, closeModal, eventId }) => {
  const register = async () => {
    const res = await registerForEvent(eventId);
    if (res.status >= 300) {
      alert("Alert : " + res.data.error);
    }
    closeModal();
  };

  return (
    <Modals
      title="Event Registration Agreement"
      visible={visible}
      closeModal={closeModal}
      okText="Register"
      onOk={(e) => {
        e.stopPropagation();
        register();
      }}
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
