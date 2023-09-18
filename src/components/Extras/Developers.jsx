import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";
import Taha from "../../assets/Developers/Taha.jpg";
import Rohail from "../../assets/Developers/Rohail.jpg";
import Arsal from "../../assets/Developers/Arsal.jpg";
import Wahab from "../../assets/Developers/Wahab.jpg";
import Female from "../../assets/Developers/Female.png";

const teamMembers = [
  {
    name: "Sohny Savira",
    role: "Team Lead",
    qualification: "MSCS",
    institute: "Pakistan Post",
    picture: Female,
  },
  {
    name: "Abdul Wahab",
    role: "Backend Developer",
    qualification: "BSCS",
    institute: "Allama Iqbal Open University",
    picture: Wahab,
  },
  {
    name: "Eisha Farooq",
    role: "Frontend React Developer",
    qualification: "BSSE",
    institute: "National University of Modern Languages, Islamabad",
    picture: Female,
  },
  {
    name: "Hamda Noor",
    role: "Frontend React Developer",
    qualification: "BSCS",
    institute: "Comsats University, Islamabad",
    picture: Female,
  },
  {
    name: "Maham Noor",
    role: "Frontend React Developer",
    qualification: "BSSE",
    institute: "National University of Modern Languages, Islamabad",
    picture: Female,
  },
  {
    name: "Muhammad Arsal",
    role: "Full Stack Developer",
    qualification: "BSCS",
    institute: "Comsats University, Islamabad",
    picture: Arsal,
  },
  {
    name: "Muhammad Taha",
    role: "Full Stack Developer",
    qualification: "BSSE",
    institute: "National University of Modern Languages, Islamabad",
    picture: Taha,
  },
  {
    name: "Rohail Ahmed",
    role: "Full Stack Developer",
    qualification: "BSCS",
    institute: "Comsats University, Islamabad",
    picture: Rohail,
  },
  {
    name: "Sana Khan",
    role: "Frontend React Developer",
    qualification: "BSCS",
    institute: "Comsats University, Islamabad",
    picture: Female,
  },
];

const Developers = () => {
  const teamLeads = teamMembers.filter((member) => member.role === "Team Lead");
  const otherMembers = teamMembers.filter(
    (member) => member.role !== "Team Lead"
  );

  return (
    <Box mt={8}>
      <Center>
        <Text
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
          display={"inline-block"}
          textAlign={"center"}
          my={"5"}
          px={"2"}
        >
          Website Developers
        </Text>
      </Center>
      <VStack spacing={8} w={"90%"} mx={"auto"} my={"2rem"}>
        {teamLeads.map((member, index) => (
          <HStack
            key={index}
            w={{ base: "90%", sm: "40%" }}
            p={4}
            borderRadius="md"
            my={4}
            shadow={"base"}
          >
            <Image
              src={member.picture}
              alt={member.name}
              boxSize="120px"
              borderRadius="full"
            />
            <VStack align="flex-start">
              <Text fontSize="lg" fontWeight="bold" textColor={"#ed1b24"}>
                {member.name}
              </Text>
              <Text>{member.role}</Text>
              <Text>{member.qualification}</Text>
              <Text>{member.institute}</Text>
            </VStack>
          </HStack>
        ))}

        <Flex
          wrap={"wrap"}
          w={"90%"}
          m={"auto"}
          justifyContent={"space-around"}
        >
          {otherMembers.map((member, index) => (
            <HStack
              key={index}
              w={{ base: "100%", lg: "40%" }}
              p={4}
              mb={4}
              shadow={"base"}
            >
              <Image
                src={member.picture}
                alt={member.name}
                boxSize="120px"
                borderRadius="full"
              />
              <VStack align="flex-start">
                <Text fontSize="lg" fontWeight="bold" textColor={"#ed1b24"}>
                  {member.name}
                </Text>
                <Text>{member.role}</Text>
                <Text>{member.qualification}</Text>
                <Text>{member.institute}</Text>
              </VStack>
            </HStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Developers;
