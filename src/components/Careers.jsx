"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
  Link,
  Center,
} from "@chakra-ui/react";

import { HiOutlineNewspaper } from "react-icons/hi";

import { CareersData } from "../DataObjects/CareersData";

export default function Careers() {
  return (
    <>
      <Career />
    </>
  );
}

function Career() {
  return (
    <Box p={4} my={"2rem"}>
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
            Careers
          </Text>
        </Center>
        <Text color={"gray.600"} fontSize={"xl"}>
          Get Informed about career oppertunities at Pakistan Post.
        </Text>
      </Stack>

      <Container
        maxW={"6xl"}
        mt={10}
        rounded={"20px"}
        py={"1rem"}
        boxShadow={"2px 2px 2px 2px rgba(237, 27, 36, 0.7)"}
      >
        <SimpleGrid columns={{ base: 1 }} spacing={5}>
          {CareersData.map((CareersData) => (
            <HStack
              key={CareersData.id}
              align={"top"}
              rounded={"20px"}
              py={"0.5rem"}
              boxShadow={"2px 2px 2px 2px rgba(237, 27, 36, 0.7)"}
            >
              <Box color={"green.400"} px={2}>
                <HiOutlineNewspaper size={40} color={"#ed1b24"} />
              </Box>
              <VStack align={"start"}>
                <Link href={CareersData.url} target={"blank"}>
                  {CareersData.title}
                </Link>
                <Link href={CareersData.url2} target={"blank"}>
                  {CareersData.title2}
                </Link>
                <Link href={CareersData.url3} target={"blank"}>
                  {CareersData.title3}
                </Link>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
