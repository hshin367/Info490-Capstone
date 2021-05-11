/**
 * Page for Upcoming Events
 */
import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, DatePicker, TimePicker, Select } from "antd";
import "./Login.css";
import { SignupButton } from "../components/Button/button.js";
import { LogoText } from "../components/Logo/style";
import {
  FriendContainer,
  PageContainer,
  Container,
  SignUpFormContainer,
} from "./styles/style.js";
import { SearchOutlined } from "@ant-design/icons";

/**
 * Event Component
 * @description Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Events = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {};
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

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
      <Input placeholder="Event Title" />
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
      />
    </Form.Item>
  );

  const time = (
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
        <Input placeholder="Event Location*" />
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
            <Input placeholder="City*" />
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
            <Input placeholder="State*" />
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
            <Input placeholder="Zip Code" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );

  const organizationInfo = (
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
          <Input placeholder="Organization Name" />
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
          />
        </Form.Item>
      </Col>
    </Row>
  );

  const eventAward = (
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
      <Select placeholder="Select Reward">
        <Select.Option value="demo">Clownfish</Select.Option>
        <Select.Option value="demo">Large Moorish Idol</Select.Option>
        <Select.Option value="demo">Small Moorish Idol</Select.Option>
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

  // create a mapped result of the filtered events from the handleChagne fn.
  let searchEventResult = filteredEvents.map((singleEvent) => {
    return (
      <li>
        <h2>{singleEvent.name}</h2>
        <p>{singleEvent.organizerName}</p>
        <p>{singleEvent.startTime}</p>
      </li>
    );
  });

  function handleChange(e) {
    const searchString = e.target.value.toLowerCase();
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
    <PageContainer>
      <FriendContainer>
        <Container
          style={{ justifyContent: "center", backdropFilter: "blur(3px)" }}
        >
          <Row>
            <SignUpFormContainer
              backgroundColor="rgba(255, 255, 255, 0.1)"
              width="600px"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                  placeholder="Search Event"
                  id="searchBar"
                  type="text"
                  name="searchBar"
                  prefix={<SearchOutlined />}
                  onChange={handleChange}
                />
                <ul>{searchEventResult}</ul>
              </div>
            </SignUpFormContainer>
          </Row>
        </Container>
        <Container
          style={{ justifyContent: "center", backdropFilter: "blur(3px)" }}
        >
          <Row>
            <SignUpFormContainer
              backgroundColor="rgba(255, 255, 255, 0.1)"
              width="600px"
              borderRadius=""
              justifyContent="left"
            >
              <Row>
                <Row>
                  <LogoText style={{ marginBottom: "10%" }}>
                    CREATE EVENT
                  </LogoText>
                </Row>
                <Row justify="space-around" wrap="nowrap">
                  <Col span={17}>
                    <Form
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      scrollToFirstError
                      className="signup"
                    >
                      {eventTitle}
                      {eventStartDate}
                      {time}
                      {eventDeadline}
                      {eventLocation}
                      {organizationInfo}
                      {eventAward}
                      <Form.Item className="button-form">
                        <SignupButton
                          onClick={console.log("click")}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            width: "100%",
                          }}
                        >
                          Submit Event
                        </SignupButton>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </Row>
            </SignUpFormContainer>
          </Row>
        </Container>
      </FriendContainer>
    </PageContainer>
  );
};

export default Events;
