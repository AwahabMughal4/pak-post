import React from "react";
import TrackComponent from "./HomeSubcomponents/TrackComponent";
import {
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Websites } from "../DataObjects/WebsitesData";

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

      <Stack spacing={4} textAlign={"center"} w={"80%"} m={"auto"}>
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
            International Tracking
          </Text>
        </Center>
        <Text color={"gray.600"} fontSize={"xl"} mb={"3rem"}>
          You can track the International Speed Post items booked from Pakistan
          and destined to the following countries. Click on the country to open
          the link and track your article/shipment.
        </Text>

        <Flex flexDirection={"column"}>
          {Websites.map((continents) => (
            <>
              <Center>
                <Heading
                  fontSize={{ base: "2xl", sm: "4xl" }}
                  fontWeight={"bold"}
                  display={"inline-block"}
                  borderBottom={"2px solid red"}
                  textColor={"#ed1b24"}
                  p={"2"}
                >
                  {continents.continent}
                </Heading>
              </Center>

              <Flex my={"2rem"} wrap={"wrap"} justifyContent={"space-evenly"}>
                {continents.countries.map((country) => (
                  <Flex w={"20%"} justifyContent={"center"} my={"0.5rem"}>
                    <a href={country.Website} target="blank">
                      <Text
                        _hover={{
                          color: "red",
                          textDecoration: "underline",
                        }}
                      >
                        {country.Country}
                      </Text>
                    </a>
                  </Flex>
                ))}
              </Flex>
            </>
          ))}
        </Flex>
      </Stack>
    </div>
  );
};

export default Track;
