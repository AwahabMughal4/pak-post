"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import upu from "../../assets/ImpPortalsImages/upu.jpg";
import psc from "../../assets/ImpPortalsImages/psc.png";
import pcp from "../../assets/ImpPortalsImages/pcp.png";

const Card = ({ heading, img, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px", "2xl": "30%" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={"20"}
          h={"20"}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          <Image src={img} />
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
        </Box>
        <a href={href} target="blank">
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </a>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4} my={{ base: "3rem", "2xl": "1rem" }}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Center>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
            display={"inline-block"}
            borderBottom={"2px solid red"}
            p={"2"}
          >
            Important Portals
          </Heading>
        </Center>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Explore essential resources in our 'Important Websites' section,
          featuring links to national and international postal services, customs
          information.
        </Text>
      </Stack>

      <Container maxW={{ base: "5xl", "2xl": "none" }} mt={12}>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justifyContent="center"
          alignItems={"center"}
        >
          <Card
            heading={"Universal Postal Union"}
            img={upu}
            href={"https://www.upu.int/en/home"}
          />
          <Card
            heading={"Postal Staff College"}
            img={psc}
            href={"https://ecopsc.gov.pk/"}
          />
          <Card
            heading={"Pakistan Citizen Portal"}
            img={pcp}
            href={"https://web.citizenportal.gov.pk/"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
