import React from "react";
import PropTypes from "prop-types";
import Banner from "../components/Banner/banner.js";
import { YourEvents } from "../components/Events/YourEvents.js";
import {
  Flex,
  HorizontalScrollableContainer,
  Blur,
} from ".././pages/styles/style.js";
import { Container } from "./styles/style";
import Fish from "../components/Fish/Fish";
// import { Container } from "../components/Carousel/style.js";

const LowerHalf = () => {
  // if signed in, show YourEvents, if not, show Upcoming
  return (
    //  TODO : refactor this into a component
    <>
      <Flex
        flexDirection="column"
        paddingLeft="xxl"
        position="absolute"
        bottom="30px"
        border="white 2px solid"
        borderRadius="30px"
        margin="1rem"
      >
        <Blur />
        <YourEvents />
      </Flex>
    </>
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
      <Flex
        flexDirection="column"
        background="linear-gradient(#0E183F, #3B4782)"
        height="100vh"
        width="100vw"
        position="relative"
      >
        {/* // TODO : place aquarium here.  */}
        <Fish />
        <Fish />
        <LowerHalf />
      </Flex>
    </>
  );
};

export default Dashboard;
