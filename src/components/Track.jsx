import React from "react";
import TrackComponent from "./HomeSubcomponents/TrackComponent";
import { Center, Container, Stack, Text } from "@chakra-ui/react";

const Track = () => {
  return (
    <div className="m-[2rem]">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Center>
          <Text
            fontSize={"3xl"}
            color={"white"}
            bgColor={"#ed1b24"}
            transform="skewX(-10deg)"
            borderRadius={"none"}
            display={"inline-block"}
            textAlign={"center"}
            px={"0.5rem"}
          >
            Track Your Parcels
          </Text>
        </Center>
        <Text color={"gray.600"} fontSize={"xl"} mb={"3rem"}>
          Enter your tracking number below to stay updated on your parcel's
          journey.
        </Text>
      </Stack>
      <TrackComponent />
    </div>
  );
};

export default Track;
