import React from "react";
import PropTypes from "prop-types";
import Banner from "../components/Banner/banner.js";
import Events from "../components/Events/eventBox.js";

const LowerHalf = () => {
  return (
    <>
      <Events />
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
      <Banner />
      <LowerHalf />
    </>
  );
};

export default Dashboard;
