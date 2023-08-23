"use client";

import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import {
  ContactSideData,
  ContactDG,
  ContactCCC,
  ContactGB,
  ContactAJK,
  ContactPGP,
  ContactNPC,
  ContactCPC,
  ContactSPC,
  ContactPGSB,
  ContactMCK,
  ContactNSC,
  ContactBCQ,
  ContactKPC,
} from "../DataObjects/ContactData";

export default function ContactUs() {
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
      // pos="sticky"
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
      {ContactSideData.map((link) => (
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

const Card = ({ designation, name, email, phone }) => {
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
          {designation}
        </Heading>
        <Text textAlign={"center"}>{name}</Text>
        <Text textAlign={"center"}>{email}</Text>
        <Text textAlign={"center"}>{phone}</Text>
      </Flex>
    </Box>
  );
};

const Contacts = () => {
  return (
    <div>
      <div id="dg">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Directorate General
        </Heading>
        <Center>
          <Card
            designation={"Chairman/ Director General"}
            name={"Hafiz Shakil Ahmed Qureshi"}
            email={"dg@pakpost.gov.pk"}
            phone={"051-9632340"}
          />
        </Center>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactDG.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="ccc">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Customer Care Centers
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactCCC.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="gbc">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          FC & GB Circle Islamabad
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactGB.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="ajkc">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          AJK Circle Muzaffarabad
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactAJK.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="gpun">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Postmaster General Punjab
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactPGP.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="npun">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Northern Punjab Circle Rawalpindi
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactNPC.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="cpun">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Central Punjab Circle Lahore
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactCPC.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="spun">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Southern Punjab Circle Multan
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactSPC.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="gsb">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Postmaster General Sindh & Baluchistan
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactPGSB.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="karc">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Metropolitan Circle Karachi
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactMCK.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="nsin">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Northern Sindh Circle Hyderabad
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactNSC.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="balc">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Balochistan Circle Quetta
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactBCQ.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
      <div id="kpkc">
        <Heading
          p={"1rem"}
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          Khyber Pakhtunkhwa Circle Peshawar
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {ContactKPC.map((Contact) => (
            <Card
              designation={Contact.designation}
              name={Contact.name}
              email={Contact.email}
              phone={Contact.phone}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
};
