import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const contentStyle = {
  height: "160px",
  color: "black",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SlidingCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default SlidingCarousel;
