import React from "react";
import SlidingCarousel from "../Carousel/slidingcarousel.js";
import PropTypes from "prop-types";

import { Container } from "./style.js";

/**
 * Banner Component
 * - Renders image filled banner on the main page.
 *
 * @property {string}
 */

const Banner = () => {
  return (
    <Container>
      <SlidingCarousel />
    </Container>
  );
};

export default Banner;
