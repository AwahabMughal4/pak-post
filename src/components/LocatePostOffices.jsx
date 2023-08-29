"use client";

import React from "react";
import { Box, Flex, useColorModeValue, Text, Heading } from "@chakra-ui/react";
import {
  LocateUsData,
  Punjab,
  Sindh,
  Khayber,
  Balochistan,
  Federal,
  Gilgit,
  Kashmir,
} from "../DataObjects/LocateUsData";

export default function LocateUs() {
  return (
    <div className="flex">
      <SidebarContent display={{ base: "none", md: "block" }} />
      <Box
        ml={"1rem"}
        p="1rem"
        w={"80%"}
        border={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        h={"full"}
      >
        <Contacts />
      </Box>
    </div>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      w={"20%"}
      pos="sticky"
      top={0}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          borderBottom={"2px solid #ed1b24"}
        >
          Contact Us
        </Text>
      </Flex>
      {LocateUsData.map((link) => (
        <NavItem key={link.name} id={link.id}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ children, id, ...rest }) => {
  return (
    <Box
      as="a"
      href={`#${id}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#ed1b24",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  );
};

const Card = ({ name, location, link }) => {
  return (
    <Box
      w={{ base: "full", md: "40%" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      m={"0.5rem"}
    >
      <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
        <Heading size="md" color={"#ed1b24"}>
          {name}
        </Heading>
        <a href={link} target="blank">
          <Text textAlign={"center"}>{location}</Text>
        </a>
      </Flex>
    </Box>
  );
};

const Contacts = () => {
  return (
    <div>
      <div id="fed">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Federal Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Federal.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
      <div id="kashmir">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Kashmir Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Kashmir.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
      <div id="gilgit">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Gilgit Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Gilgit.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
      <div id="punjab">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Punjab Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Punjab.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
      <div id="sindh">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Sindh Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Sindh.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
      <div id="balochistan">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Balochistan Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Balochistan.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
      <div id="kpk">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Khayber Post Offices
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Khayber.map((Contact) => (
            <Card
              name={Contact.name}
              location={Contact.location}
              link={Contact.link}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
};
