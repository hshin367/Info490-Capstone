import React from "react";
import PropTypes from "prop-types";
import Banner from "../components/Banner/banner.js";
import { YourEvents } from "../components/Events/eventBox.js";
import { Flex } from ".././pages/styles/style.js";
import Fish from "../components/Fish/Fish.js";

const LowerHalf = () => {
  // if signed in, show YourEvents, if not, show Upcoming
  return (
    <Flex flexDirection="column" paddingLeft="xxl" position="relative">
      <YourEvents />
      <Fish />
    </Flex>
  );
};

/**
 * Dashboard Component
 * @description Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Dashboard = () => {
  return (
    <>
      <Banner />
      <LowerHalf />
    </>
  );
};

export default Dashboard;
