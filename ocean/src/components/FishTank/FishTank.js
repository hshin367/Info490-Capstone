import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Fish from "../Fish/Fish";
import { getFishes } from "../../actions/actions";

const FishTank = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fish, setFish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getAllFishes();
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeigh);
  };

  let sampleData = [
    {
      fish,
    },
    { fish },
  ];

  const getAllFishes = async () => {
    const allFishes = await getFishes();

    if (!allFishes) {
      setLoading(false);
      console.log("did not get the fish");
    } else {
      setLoading(false);
      console.log("got the fish");
      console.log(allFishes);
      setFish(allFishes);
    }
  };

  let fishes = sampleData.map((fish) => {
    console.log(fish);
    return <Fish left={"left"} right={"right"} src={fish} />;
  });

  return <>{"fishes"}</>;
};

export default FishTank;
