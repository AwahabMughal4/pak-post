import React from "react";
import { VStack } from "@chakra-ui/react";

import Track from "./TrackComponent";

const TrackSection = () => {
  return (
    <VStack my={"1rem"} p={"1rem"} w={"70%"}>
      <Track />
    </VStack>
  );
};

export default TrackSection;
