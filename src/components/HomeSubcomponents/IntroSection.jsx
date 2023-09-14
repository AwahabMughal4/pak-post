import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const IntroSection = () => {
  return (
    <Flex flexDirection={"column"} w={"80%"} m={"auto"} textAlign={"justify"}>
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          display={"inline-block"}
          borderBottom={"2px solid red"}
          p={2}
          m={2}
        >
          Welcome To Pakistan Post
        </Heading>
      </Center>
      <Text fontSize={{ base: "15px", md: "20px" }}>
        Pakistan Post recognizes the evolving nature of the communications
        market and is committed to expanding its role beyond traditional postal
        services. Embracing new communication and information technologies,
        Pakistan Post aims to enhance its offerings, ensuring secure and timely
        delivery of mail, money, and materials to customers' doorsteps at
        affordable rates. Beyond mail delivery, the organization plays a crucial
        role in providing financial services to the unbanked, supporting
        e-commerce growth, facilitating government services, and offering
        logistics solutions. Through digital initiatives and international
        partnerships, Pakistan Post is transforming itself into a versatile
        entity that adapts to the changing needs of the modern world while
        maintaining its core values of reliability, accessibility, and
        affordability, ultimately striving to serve as a comprehensive
        communications and logistics solution provider for the people and
        businesses of Pakistan.
      </Text>
    </Flex>
  );
};

export default IntroSection;
