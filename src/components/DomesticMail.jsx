import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import ServiceCard from "./HomeSubcomponents/ServiceCard";
import {
  TraditionalServices,
  MiscellaneousServices,
} from "../DataObjects/data";
import Heroimage from "../assets/ServicesSectionImages/Service Hero.png";
import { Flex, VStack, useBreakpointValue } from "@chakra-ui/react";

const DomesticMail = () => {
  return (
    <div>
      <Flex
        w={"100%"}
        h={{ base: "30vh",sm:"40vh",md: "50vh" ,lg:"60vh"}} // Use double curly braces for objects
        backgroundImage={Heroimage}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"100%"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 ,lg:8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        ></VStack>
      </Flex>

      <Center>
        <Heading
          m={"auto"}
          display={"inline-block"}
          borderBottom={"2px solid red"}
          p={"2"}
        >
          Traditional Services
        </Heading>
      </Center>
      <div className="p-3">
        <div className="flex  flex-col md:flex-row  flex-wrap">
          {TraditionalServices.map((item) => {
            return (
              <ServiceCard
                icon={item.icon}
                heading={item.title}
                description={item.description}
                pdfPath={item.pdfPath}
              />
            );
          })}
        </div>
      </div>
      <Center>
        <Heading
          m={"auto"}
          display={"inline-block"}
          borderBottom={"2px solid red"}
          p={"2"}
        >
          Miscellaneous Services
        </Heading>
      </Center>
      <div className="p-3">
        <div className="flex  flex-col md:flex-row  flex-wrap">
          {MiscellaneousServices.map((item) => {
            return (
              <ServiceCard
                icon={item.icon}
                heading={item.title}
                description={item.description}
                pdfPath={item.pdfPath}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DomesticMail;
