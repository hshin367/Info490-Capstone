import React from "react";
import styled from "styled-components";

import { Carousel } from "antd";
import { Container } from "./style.js";
import "antd/dist/antd.css";

import SliderItem from "./SliderItem/sliderItem.js";

const StyledSlider = styled(Carousel)`
  height: 60vh;
`;

const SliderItemContainer = styled.div`
  height: 60vh;
`;

const Bg = styled.div`
  background-image: url(${process.env.PUBLIC_URL +
  "/img/Capstone/Banner1.png"});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top left;

  height: 100%;
  width: auto;
  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: white;
`;

const SlidingCarousel = (props) => {
  const slideContent = () => props.map((d) => <div></div>);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <StyledSlider {...settings}>
      <SliderItemContainer>
        <Bg>
          <SliderItem />
        </Bg>
      </SliderItemContainer>

      <SliderItemContainer>
        {" "}
        <Bg>{/* <div>sdfsd</div> */}</Bg>
      </SliderItemContainer>

      <SliderItemContainer>
        {" "}
        <Bg>{/* <div>sdfsd</div> */}</Bg>
      </SliderItemContainer>

      <SliderItemContainer>
        {" "}
        <Bg>{/* <div>sdfsd</div> */}</Bg>
      </SliderItemContainer>

      {/* <div>
        <img src="img/Capstone/Banner3.png" alt="Logo" />
      </div>
      <div>
        <img src="img/Capstone/Banner4.png" alt="Logo" />
      </div> */}
    </StyledSlider>
  );
};

export default SlidingCarousel;
