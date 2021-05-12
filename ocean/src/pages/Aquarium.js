import React, { useContext } from "react";
import FishTank from ".././components/FishTank/FishTank.js";
import { Flex } from "./styles/style";

// TODO : refactor Flex into another component
const Aquarium = () => {
  return (
    <Flex
      flexDirection="column"
      height="100vh"
      width="100vw"
      position="relative"
    >
      <FishTank showCustBtn={true} />
    </Flex>
  );
};

export default Aquarium;
