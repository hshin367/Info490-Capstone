/**
 * Page for Upcoming Events
 */

import React from "react";
import PropTypes from "prop-types";
import Banner from "../components/Banner/banner.js";
import UpcomingEvents from "../components/Events/UpcomingEvents.js";
import { Flex } from "./styles/style.js";

const LowerHalf = () => {
  // if signed in, show YourEvents, if not, show Upcoming
  return (
    <Flex flexDirection="column" paddingLeft="xxl" position="relative">
      <UpcomingEvents />
    </Flex>
  );
};

/**
 * Event Component
 * @description Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Events = () => {
  return (
    <>
      <Banner />
      <LowerHalf />
    </>
  );
};

export default Events;
