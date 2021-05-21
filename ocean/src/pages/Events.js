/**
 * Page for Upcoming Events
 */
import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, DatePicker, TimePicker, Select } from "antd";

import { EnvironmentOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./styles/Events.css";
import "./Login.css";
import {
  FriendListContainer,
  FriendRequestTitleBox,
  ListContainer,
  TitleBox,
} from "../components/Friends/style";
import { EventSubmitBtn } from "../components/Button/button.js";
import { LogoText } from "../components/Logo/style";
import {
  FriendContainer,
  FriendsPageContainer,
  Container,
  SignUpFormContainer,
  EventSearchFormContainer,
} from "./styles/style.js";
import { SearchOutlined } from "@ant-design/icons";
import FriendSearchBar from "../components/InputForms/FriendSearchBar";
import {
  EventRegistrationModal,
  EventRegistrationAgreementForm,
} from "../components/Events/UpcomingEvents";
import axios from "axios";

/**
 * Event Component
 * @description Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Events = () => {
  const [form] = Form.useForm();
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [deadline, setDeadline] = useState();
  const [location, setLocation] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipCode, setZipCode] = useState();
  const [organizerName, setOrganizerName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [fish, setFish] = useState();
  const [modalVisible, setModalVisble] = useState(false);
  const [eventId, setEventId] = useState("");

  // const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     history.push("/events");
  //   }
  // }, []);

  function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }

  const createEvent = async () => {
    let item = {
      name,
      description,
      date,
      startTime,
      endTime,
      deadline,
      location,
      city,
      state,
      zipCode,
      organizerName,
      contactNumber,
      fish,
    };

    const userToken = JSON.parse(localStorage.getItem("user-info")).token;
    const reqConfig = {
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    };

    try {
      const res = await axios({
        method: "POST",
        url: "https://us-central1-restore-uw.cloudfunctions.net/api/event",
        headers: {
          authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify(item),
      });
      return res;
    } catch (err) {
      if (err.response) {
        console.log(
          "Failed to post event Error Status: " + err.response.status
        );
        return err.response;
      }
    }

    console.log(item);
  };

  const eventTitle = (
    <Form.Item
      name="Event Title"
      rules={[
        {
          required: true,
          message: "Please input your First Name!",
        },
      ]}
      style={{ backgroundColor: "rgba(15, 25, 65, 0.6)", borderRadius: "8px" }}
    >
      <Input
        placeholder="Event Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="create-event"
      />
    </Form.Item>
  );

  const eventDescription = (
    <Form.Item
      name="Event Description"
      rules={[
        {
          required: true,
          message: "Please input your First Name!",
        },
      ]}
      style={{ backgroundColor: "rgba(15, 25, 65, 0.6)", borderRadius: "8px" }}
    >
      <Input
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="create-event"
      />
    </Form.Item>
  );

  const eventStartDate = (
    <Form.Item
      name="eventDate"
      rules={[
        {
          required: true,
          message: "Date of Birth* (yyyy/mm/dd)",
        },
      ]}
      style={{ backgroundColor: "rgba(15, 25, 65, 0.6)", borderRadius: "8px" }}
    >
      <DatePicker
        style={{
          width: "100%",
        }}
        placeholder="Event Date*"
        value={date}
        className="create-event"
        onChange={(time, timeString) => setDate(timeString)}
      />
    </Form.Item>
  );

  const eventTime = (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="date-picker"
          rules={[
            {
              required: true,
              message: "Select Start Time",
            },
          ]}
          style={{
            backgroundColor: "rgba(15, 25, 65, 0.6)",
            borderRadius: "8px",
          }}
        >
          <TimePicker
            style={{
              width: "100%",
            }}
            placeholder="Event Start Time*"
            value={startTime}
            className="create-event"
            onChange={(time, timeString) => setStartTime(timeString)}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="date-picker"
          rules={[
            {
              required: true,
              message: "Select End Time",
            },
          ]}
          style={{
            backgroundColor: "rgba(15, 25, 65, 0.6)",
            borderRadius: "8px",
          }}
        >
          <TimePicker
            style={{
              width: "100%",
            }}
            placeholder="Event End Time*"
            value={endTime}
            className="create-event"
            onChange={(time, timeString) => setEndTime(timeString)}
          />
        </Form.Item>
      </Col>
    </Row>
  );

  const eventDeadline = (
    <Form.Item
      name="eventDeadline"
      rules={[
        {
          required: true,
          message: "Select Registration Deadline",
        },
      ]}
      style={{ backgroundColor: "rgba(15, 25, 65, 0.6)", borderRadius: "8px" }}
    >
      <DatePicker
        style={{
          width: "100%",
        }}
        placeholder="Registration Deadline*"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="create-event"
      />
    </Form.Item>
  );

  const eventLocation = (
    <div>
      <Form.Item
        name="Event Location"
        rules={[
          {
            required: true,
            message: "Enter event location!",
          },
        ]}
        style={{
          backgroundColor: "rgba(15, 25, 65, 0.6)",
          borderRadius: "8px",
        }}
      >
        <Input
          placeholder="Event Location*"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="create-event"
        />
      </Form.Item>

      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name="City"
            rules={[
              {
                required: true,
                message: "Please input your City!",
              },
            ]}
            style={{
              backgroundColor: "rgba(15, 25, 65, 0.6)",
              borderRadius: "8px",
            }}
          >
            <Input
              placeholder="City*"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="create-event"
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="State"
            rules={[
              {
                required: true,
                message: "Please input your State!",
              },
            ]}
            style={{
              backgroundColor: "rgba(15, 25, 65, 0.6)",
              borderRadius: "8px",
            }}
          >
            <Input
              placeholder="State*"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="create-event"
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="Zip Code"
            rules={[
              {
                required: true,
                message: "Please input your Zip Code!",
              },
            ]}
            style={{
              backgroundColor: "rgba(15, 25, 65, 0.6)",
              borderRadius: "8px",
            }}
          >
            <Input
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="create-event"
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );

  const eventOrganizer = (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="organizationName"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
          style={{
            backgroundColor: "rgba(15, 25, 65, 0.6)",
            borderRadius: "8px",
          }}
        >
          <Input
            placeholder="Organization Name"
            value={organizerName}
            onChange={(e) => setOrganizerName(e.target.value)}
            className="create-event"
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
          style={{
            backgroundColor: "rgba(15, 25, 65, 0.6)",
            borderRadius: "8px",
          }}
        >
          <Input
            style={{
              width: "100%",
            }}
            placeholder="Phone Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="create-event"
          />
        </Form.Item>
      </Col>
    </Row>
  );

  const eventFish = (
    <Form.Item
      name="Award"
      rules={[
        {
          required: true,
          message: "Please input your First Name!",
        },
      ]}
      style={{ backgroundColor: "rgba(15, 25, 65, 0.6)", borderRadius: "8px" }}
    >
      <Select
        placeholder="Select Reward"
        value={fish}
        onChange={(value, option) => setFish(value)}
      >
        <Select.Option value="clownfish">Clownfish</Select.Option>
        <Select.Option value="largeMoorishIdol">
          Large Moorish Idol
        </Select.Option>
        <Select.Option value="smallMoorishIdol">
          Small Moorish Idol
        </Select.Option>
      </Select>
    </Form.Item>
  );

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const res = await fetch(
        "https://us-central1-restore-uw.cloudfunctions.net/api/events"
      );
      const eventsArr = await res.json();
      setAllEvents(eventsArr);
      setFilteredEvents(eventsArr);
      // displayEvents(events);
    } catch (err) {
      console.error(err);
    }
  };

  const openModal = (eid) => {
    setModalVisble(true);
    setEventId(eid);
  };

  const closeModal = () => {
    setModalVisble(false);
  };

  // create a mapped result of the filtered events from the handleChagne fn.
  let searchEventResult = filteredEvents.map((singleEvent) => {
    return (
      <div
        className="event-card"
        onClick={() => openModal(singleEvent.eventId)}
      >
        <div className="event-card-times">
          <div className="event-card-startTime">{singleEvent.startTime}</div>
          <div className="event-card-endTime">{singleEvent.endTime}</div>
        </div>
        <div className="event-card-info">
          <div className="event-card-names">
            <h1 className="event-card-title">{singleEvent.name}</h1>
            <p>{singleEvent.organizerName}</p>
          </div>
          <div className="event-card-location">
            <p>
              <EnvironmentOutlined /> &nbsp; {singleEvent.location}
            </p>
          </div>
          <div className="event-card-fish">
            <p>{singleEvent.fish}</p>
          </div>
        </div>
      </div>
    );
  });

  function handleChange(e) {
    const searchString = e.toLowerCase();
    if (searchString !== "") {
      const filteredEvents = allEvents.filter((singleEvent) => {
        return singleEvent.name.toLowerCase().includes(searchString);
      });
      setFilteredEvents(filteredEvents);
    } else {
      setFilteredEvents(allEvents);
    }
  }

  return (
    <FriendsPageContainer>
      <FriendContainer>
        <Row style={{ height: "100%" }}>
          <Col className="events-left">
            <FriendListContainer>
              <TitleBox>EVENTS</TitleBox>
              <FriendSearchBar
                handleChange={handleChange}
                text="Search Event"
              />
              <ListContainer>{searchEventResult}</ListContainer>
              <EventRegistrationModal
                visible={modalVisible}
                closeModal={closeModal}
                eventId={eventId}
              />
            </FriendListContainer>
          </Col>

          <Col className="events-right">
            <EventSearchFormContainer
              width="auto"
              borderRadius=""
              justifyContent="left"
            >
              <Row>
                <FriendRequestTitleBox style={{ marginBottom: "5%" }}>
                  CREATE EVENT
                </FriendRequestTitleBox>
                <Row justify="space-around" wrap="nowrap">
                  <Form
                    form={form}
                    name="register"
                    scrollToFirstError
                    className="signup create-events"
                  >
                    {eventTitle}
                    {eventDescription}
                    {eventStartDate}
                    {eventTime}
                    {eventDeadline}
                    {eventLocation}
                    {eventOrganizer}
                    {eventFish}
                    <Form.Item className="button-form">
                      <EventSubmitBtn
                        onClick={createEvent}
                        color="#6f6f6f33"
                        style={{
                          width: "100%",
                        }}
                      >
                        Submit Event
                      </EventSubmitBtn>
                    </Form.Item>
                  </Form>
                </Row>
              </Row>
            </EventSearchFormContainer>
          </Col>
        </Row>
      </FriendContainer>
    </FriendsPageContainer>
  );
};

export default Events;
