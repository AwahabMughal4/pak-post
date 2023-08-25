import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import ServiceCard from "./HomeSubcomponents/ServiceCard";
import { ExpressService } from "../DataObjects/data";
import { Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import Heroimage from "../assets/ServicesSectionImages/expressmail.png";

const ExpressServices = () => {
  return (
    <div>
      <Flex
        w={"full"}
        h={"70vh"}
        backgroundImage={Heroimage}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
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
          Express Services{" "}
        </Heading>
      </Center>
      <div className="p-3">
        <div className="flex flex-wrap">
          {ExpressService.map((item) => {
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

export default ExpressServices;
