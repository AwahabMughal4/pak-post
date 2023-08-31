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

import { ManualsData } from "../DataObjects/ManualsData";

export default function Manuals() {
  return (
    <>
      <Manual />
    </>
  );
}

function Manual() {
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
            Post Office Manuals, Act & Rules & D.G. Circulars
          </Text>
        </Center>
        <Text color={"gray.600"} fontSize={"xl"}>
          Download Manuals, Act & Rules & D.G. Circulars from below.
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
          {ManualsData.map((ManualsData) => (
            <HStack
              key={ManualsData.id}
              align={"top"}
              rounded={"20px"}
              py={"0.5rem"}
              boxShadow={"2px 2px 2px 2px rgba(237, 27, 36, 0.7)"}
            >
              <Box color={"green.400"} px={2}>
                <HiOutlineNewspaper size={40} color={"#ed1b24"} />
              </Box>
              <VStack align={"start"}>
                <Link href={ManualsData.url} target={"blank"}>
                  {ManualsData.title}
                </Link>
                <Link href={ManualsData.url2} target={"blank"}>
                  {ManualsData.title2}
                </Link>
                <Link href={ManualsData.url3} target={"blank"}>
                  {ManualsData.title3}
                </Link>
                <Link href={ManualsData.url4} target={"blank"}>
                  {ManualsData.title4}
                </Link>
                <Link href={ManualsData.url5} target={"blank"}>
                  {ManualsData.title5}
                </Link>
                <Link href={ManualsData.url6} target={"blank"}>
                  {ManualsData.title6}
                </Link>
                <Link href={ManualsData.url7} target={"blank"}>
                  {ManualsData.title7}
                </Link>
                <Link href={ManualsData.url8} target={"blank"}>
                  {ManualsData.title8}
                </Link>
                <Link href={ManualsData.url9} target={"blank"}>
                  {ManualsData.title9}
                </Link>
                <Link href={ManualsData.url10} target={"blank"}>
                  {ManualsData.title10}
                </Link>
                <Link href={ManualsData.ur11} target={"blank"}>
                  {ManualsData.title11}
                </Link>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
