import React from "react";
import FishTank from ".././components/FishTank/FishTank.js";
import { Flex } from "./styles/style";

// TODO : refactor Flex into another component
const Aquarium = () => {
  return (
    <Flex
      flexDirection="column"
      background="linear-gradient(#0E183F, #3B4782)"
      height="100vh"
      width="100vw"
      position="relative"
    >
      <FishTank showCustBtn={true} />
    </Flex>
  );
};

export default Aquarium;
