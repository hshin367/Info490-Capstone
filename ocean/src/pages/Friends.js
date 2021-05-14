import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/navbar.js";
import FriendList from "../components/Friends/FriendList.js";
import FriendRequests from "../components/Friends/FriendRequests.js";
import AddUsers from "../components/Friends/AddUsers.js";
import Grid from "@material-ui/core/Grid";
import { Flex, FriendContainer, FriendsPageContainer } from "./styles/style.js";
import FishTank from ".././components/FishTank/FishTank.js";
import { Row, Col } from "antd";
/**
 * Event Component
 * @description Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Friends = () => {
  return (
    <>
      <FriendsPageContainer>
        <FriendContainer>
          <Row style={{ height: "100%" }}>
            <Col span={12}>
              <FriendList />
            </Col>
            <Col span={12}>
              <Row>
                <FriendRequests />
              </Row>
              <Row>
                <AddUsers />
              </Row>
            </Col>
          </Row>
        </FriendContainer>
      </FriendsPageContainer>
    </>
  );
};

export default Friends;
