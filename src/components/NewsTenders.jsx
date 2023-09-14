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

import { TendersData } from "../DataObjects/NewsTenders";
import { NewsData } from "../DataObjects/NewsTenders";

export default function NewsTenders() {
  return (
    <>
      <Tenders />
      <News />
    </>
  );
}

function Tenders() {
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
            Tenders
          </Text>
        </Center>
        <Text color={"gray.600"} fontSize={"xl"}>
          Stay informed about current business opportunities by exploring our
          Tenders section, where you can access a diverse range of procurement
          opportunities with the post office.
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
          {TendersData.slice()
            .sort((a, b) => b.id - a.id)
            .map((TendersData) => (
              <HStack
                key={TendersData.id}
                align={"top"}
                rounded={"20px"}
                py={"0.5rem"}
                boxShadow={"2px 2px 2px 2px rgba(237, 27, 36, 0.7)"}
              >
                <Box color={"green.400"} px={2}>
                  <HiOutlineNewspaper size={40} color={"#ed1b24"} />
                </Box>
                <VStack align={"start"}>
                  <Link href={TendersData.url} target={"blank"}>
                    {TendersData.title}
                  </Link>
                  <Link href={TendersData.url2} target={"blank"}>
                    {TendersData.title2}
                  </Link>
                  <Link href={TendersData.url3} target={"blank"}>
                    {TendersData.title3}
                  </Link>
                  <Link href={TendersData.url4} target={"blank"}>
                    {TendersData.title4}
                  </Link>
                  <Link href={TendersData.url5} target={"blank"}>
                    {TendersData.title5}
                  </Link>
                  <Link href={TendersData.url6} target={"blank"}>
                    {TendersData.title6}
                  </Link>
                </VStack>
              </HStack>
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function News() {
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
            News
          </Text>
        </Center>
        <Text color={"gray.600"} fontSize={"xl"}>
          Stay informed about the latest updates, promotions, and service
          enhancements through our dedicated News section.
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
          {NewsData.slice()
            .sort((a, b) => b.id - a.id)
            .map((NewsData) => (
              <HStack
                key={NewsData.id}
                align={"top"}
                rounded={"20px"}
                py={"0.5rem"}
                boxShadow={"2px 2px 2px 2px rgba(237, 27, 36, 0.7)"}
              >
                <Box color={"green.400"} px={2}>
                  <HiOutlineNewspaper size={40} color={"#ed1b24"} />
                </Box>
                <VStack align={"start"}>
                  <Link href={NewsData.url} target={"blank"}>
                    {NewsData.title}
                  </Link>
                </VStack>
              </HStack>
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
