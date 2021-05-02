import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Fish from "../Fish/Fish";

const FishTank = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fish, setfish] = useState([]);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeigh);
  };

  let sampleData = [{}];

  let fishes = sampleData.map(<Fish></Fish>);

  return <>{sampleData}</>;
};
