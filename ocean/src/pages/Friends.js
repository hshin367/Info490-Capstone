/**
 * Page for Upcoming Events
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/navbar.js";
import FriendList from "../components/Friends/FriendList.js";
import FriendRequests from "../components/Friends/FriendRequests.js";
import AddUsers from "../components/Friends/AddUsers.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Flex, FriendContainer, PageContainer } from "./styles/style.js";

/**
 * Event Component
 * @description Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Friends = () => {
  return (
    <PageContainer>
      <FriendContainer>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <FriendList />
          </Grid>
          <Grid container spacing={5} xs={4}>
            <Grid item xs={12}>
              <FriendRequests />
            </Grid>
            <Grid item xs={12}>
              <AddUsers />
            </Grid>
          </Grid>
        </Grid>
      </FriendContainer>
    </PageContainer>
  );
};

export default Friends;
