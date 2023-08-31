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

const teamMembers = [
  {
    name: "Farukh Bashir",
    role: "Director IT",
    qualification: "MBA",
    institute: "Pakistan Post",
    picture: "path-to-director-picture.jpg",
  },
  {
    name: "Roshan Aara",
    role: "Manager",
    qualification: "MSc",
    institute: "Pakistan Post",
    picture: "path-to-manager-picture.jpg",
  },
  {
    name: "Sohni Sawera",
    role: "Team Lead",
    qualification: "MSc",
    institute: "Pakistan Post",
    picture: "path-to-team-lead-picture.jpg",
  },
  {
    name: "Abdul Wahab",
    role: "Backend Developer",
    qualification: "BSCS 7th Semester",
    institute: "Allama Iqbal Open University",
    picture: "path-to-backend-dev-picture.jpg",
  },
  {
    name: "Eisha Farooq",
    role: "Frontend React Developer",
    qualification: "BSSE 6th Semester",
    institute: "National University of Modern Languages, Islamabad",
    picture: "path-to-frontend-dev-picture.jpg",
  },
  {
    name: "Hamda Noor",
    role: "Frontend React Developer",
    qualification: "BSCS 6th Semester",
    institute: "Comsats University, Islamabad",
    picture: "path-to-frontend-dev-picture.jpg",
  },
  {
    name: "Maham Noor",
    role: "Frontend React Developer",
    qualification: "BSSE 6th Semester",
    institute: "National University of Modern Languages, Islamabad",
    picture: "path-to-frontend-dev-picture.jpg",
  },
  {
    name: "Muhammad Arsal",
    role: "Full Stack Developer",
    qualification: "BSCS 6th Semester",
    institute: "Comsats University, Islamabad",
    picture: "path-to-fullstack-dev-picture.jpg",
  },
  {
    name: "Muhammad Taha",
    role: "Full Stack Developer",
    qualification: "BSSE 5th Semester",
    institute: "National University of Modern Languages, Islamabad",
    picture: Taha,
  },
  {
    name: "Rohail Ahmed",
    role: "Full Stack Developer",
    qualification: "BSCS 6th Semester",
    institute: "Comsats University, Islamabad",
    picture: "path-to-fullstack-dev-picture.jpg",
  },
  {
    name: "Sara Khan",
    role: "Frontend React Developer",
    qualification: "BSCS 6th Semester",
    institute: "Comsats University, Islamabad",
    picture: "path-to-frontend-dev-picture.jpg",
  },
];

const Developers = () => {
  const directors = teamMembers.filter(
    (member) => member.role === "Director IT"
  );
  const teamLeads = teamMembers.filter(
    (member) => member.role === "Manager" || member.role === "Team Lead"
  );
  const otherMembers = teamMembers.filter(
    (member) =>
      member.role !== "Director IT" &&
      member.role !== "Manager" &&
      member.role !== "Team Lead"
  );

  return (
    <Box mt={8}>
      <Center>
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
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
        {directors.map((member, index) => (
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
          wrap={{ base: "wrap", sm: "nowrap" }}
          w={"90%"}
          m={"auto"}
          justifyContent={"space-between"}
        >
          {teamLeads.map((member, index) => (
            <HStack
              key={index}
              w={{ base: "100%", sm: "40%" }}
              p={4}
              borderRadius="md"
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
