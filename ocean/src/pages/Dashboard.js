import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import { YourEvents } from "../components/Events/YourEvents.js";
import {
  Flex,
  HorizontalScrollableContainer,
  Blur,
} from ".././pages/styles/style.js";
import { Container } from "./styles/style";
import Fish from "../components/Fish/Fish";
import FishTank from "../components/FishTank/FishTank.js";
// import { Container } from "../components/Carousel/style.js";

const LowerHalf = () => {
  // if signed in, show YourEvents, if not, show Upcoming
  return (
    //  TODO : refactor this into a component
    <>
      <Flex
        flexDirection="column"
        position="absolute"
        bottom="0px"
        padding="0px"
        left="0px"
        width="calc(100% - 20px)"
        border="white 1.5px solid"
        borderRadius="15px"
        margin="10px"
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
        height="100vh"
        width="100vw"
        position="relative"
      >
        <FishTank />
        <LowerHalf />
      </Flex>
    </>
  );
};

export default Dashboard;
