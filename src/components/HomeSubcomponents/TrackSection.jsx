import React from "react";
import { HStack, Heading, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Track from "./TrackComponent";

const TrackSection = () => {
  return (
    <VStack my={"1.3rem"} p={"1rem"}>
      <Track />

      <HStack
        w={"100%"}
        p={"1rem"}
        justifyContent={"center"}
        flexWrap={{ base: "wrap", sm: "nowrap" }}
      >
        <Link to={"/postage"}>
          <Heading
            p={{ base: "1", sm: "2" }}
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight={{ base: "400", sm: "600" }}
            borderRadius={"none"}
            transition={"all 0.3s"}
            bgColor={"#ed1b24"}
            color={"White"}
            transform="skewX(-10deg)"
            css={{
              "&:hover": {
                transform: "scaleZ(1.1)",
              },
            }}
          >
            Calculate{"\u00A0"}Postage
          </Heading>
        </Link>
        <Link to={"/locate"}>
          <Heading
            p={{ base: "1", sm: "2" }}
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight={{ base: "400", sm: "600" }}
            borderRadius={"none"}
            transition={"all 0.3s"}
            bgColor={"#ed1b24"}
            color={"White"}
            transform="skewX(-10deg)"
            css={{
              "&:hover": {
                transform: "scaleZ(1.1)",
              },
            }}
          >
            Locate{"\u00A0"}Us
          </Heading>
        </Link>
        <Link to={"/postcode"}>
          <Heading
            p={{ base: "1", sm: "2" }}
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight={{ base: "400", sm: "600" }}
            borderRadius={"none"}
            transition={"all 0.3s"}
            bgColor={"#ed1b24"}
            color={"White"}
            transform="skewX(-10deg)"
            css={{
              "&:hover": {
                transform: "scaleZ(1.1)",
              },
            }}
          >
            Find{"\u00A0"}Postal{"\u00A0"}Code
          </Heading>
        </Link>
      </HStack>
    </VStack>
  );
};

export default TrackSection;
