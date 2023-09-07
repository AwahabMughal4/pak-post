"use client";
import React from "react";
import emsImage from "../assets/ServicesSectionImages/ems plus.png"; // Import the image
import fmsimage from "../assets/ServicesSectionImages/fax mail-2.png";
import codimage from "../assets/ServicesSectionImages/cod.png";
import sddimage from "../assets/ServicesSectionImages/parcel.png";
import umoimage from "../assets/ServicesSectionImages/urgentmoney.png";
import faximage from "../assets/ServicesSectionImages/fax.png";
import emoimage from "../assets/ServicesSectionImages/emo.png";
import umsimage from "../assets/ServicesSectionImages/ems plus-2.jpg";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image, // Import the Image component
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          textColor={"red"}
        >
          Tariffs
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Express Post Services & Express Financial Services
        </Text>
      </Stack>

      <Container maxW={"8xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Link to="/ums">
            <Card
              heading={"Urgent Mail Service"}
              icon={<Image src={umsimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Pricing details for fast and efficient urgent mail delivery services."
              }
            />
          </Link>
          <Link to="/ems">
            <Card
              heading={"Express Mail Service"}
              icon={<Image src={emsImage} alt="EMS Icon" w={10} h={10} />} // Use Image component for the custom image
              description={
                "Swift international express mail, ensuring rapid delivery with reliable tracking."
              }
            />
          </Link>
          <Link to="/fms">
            <Card
              heading={"Fax Mail Service"}
              icon={<Image src={fmsimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Money transfer via fax for convenient and efficient transactions."
              }
            />
          </Link>
          <Link to="/cod">
            <Card
              heading={"COD Service"}
              icon={<Image src={codimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "COD system pays for articles upon receipt and recovers supplier values."
              }
            />
          </Link>
          <Link to="/sdd">
            <Card
              heading={"Same Day Delivery"}
              icon={<Image src={sddimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Fast same-day delivery service for your urgent shipment needs."
              }
            />
          </Link>
          <Link to="/umson">
            <Card
              heading={"UMS Overnight"}
              icon={<Image src={umsimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Overnight service delivers quickly within a short time frame."
              }
            />
          </Link>
          <Link to="/fmo">
            <Card
              heading={"Fax Money Order"}
              icon={<Image src={faximage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Money transfer via fax for convenient and efficient transactions."
              }
            />
          </Link>
          <Link to="/umo">
            <Card
              heading={"Urgent Money Order"}
              icon={<Image src={umoimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Swift and secure money transfers through Urgent Money Order service."
              }
            />
          </Link>
          <Link to="/emo">
            <Card
              heading={"Electronic Money Order"}
              icon={<Image src={emoimage} alt="EMS Icon" w={10} h={10} />}
              description={
                "Digital payment method for secure and efficient money transfers."
              }
            />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
