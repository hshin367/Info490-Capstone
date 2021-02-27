import React from "react";
import SlidingCarousel from "../Carousel/slidingcarousel.js";
import PropTypes from "prop-types";

import { Container, DateContent, TDate } from "./style.js";

const getDate = () => {
  let tempDate = new Date();
  let date = tempDate.getDate();
  let month = tempDate.getMonth() + 1;

  return [date, month];
};

/**
 * Banner Component
 * - Renders image filled banner on the main page.
 *
 * @property {string}
 */
const Banner = () => {
  let today = getDate();

  return (
    <Container>
      <DateContent>
        TODAY
        <TDate>{today[0]}</TDate>
        <div>{`/ ${today[1]}`}</div>
      </DateContent>

      <SlidingCarousel />
    </Container>
  );
};

export default Banner;
