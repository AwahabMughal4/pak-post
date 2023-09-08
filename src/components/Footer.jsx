"use client";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TopButton from "./HomeSubcomponents/TopButton";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27338.283918751833!2d73.05466999360527!3d33.683011657660686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGPO!5e0!3m2!1sen!2s!4v1692263419795!5m2!1sen!2s"
      width="300"
      height="200"
      title="Map"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("slate.50", "slate.900")}
      color={useColorModeValue("slate.700", "gray.200")}
      borderTop={"2px solid #ed1b24"}
      zIndex={10}
    >
      <Container as={Stack} maxW={"6xl"} py={4}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={3}>
            <ListHeader>Find us</ListHeader>
            <Box>
              <Map
                my={"0.5rem"}
                color={useColorModeValue("gray.700", "white")}
              />
            </Box>
            <Text fontSize={"sm"}>
              ©2016 to 2023 Pakistan Post Office<Link to={"/devs"}>.</Link>
            </Text>
          </Stack>
          <Stack align={"flex-start "} mx={{ base: "1rem" }}>
            <ListHeader>Pages</ListHeader>
            <Link to={"/"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>Home</Box>
            </Link>
            <Link to={"/about"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>About</Box>
            </Link>
            <Link to={"/stamps"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>Stamps</Box>
            </Link>
            <Link to={"/careers"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Careers
              </Box>
            </Link>
            <Link to={"/emails"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Email Notice Board
              </Box>
            </Link>
          </Stack>
          <Stack align={"flex-start"} mx={{ base: "1rem" }}>
            <ListHeader>Support</ListHeader>
            <Link to={"/faqs"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>FAQs</Box>
            </Link>
            <Link to={"/privacy"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Privacy
              </Box>
            </Link>
            <Link to={"/resthouses"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Rest Houses
              </Box>
            </Link>
            <Link to={"/manuals"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Manuals
              </Box>
            </Link>
            <Link to={"/complaints"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Complaints
              </Box>
            </Link>
          </Stack>
          <Stack mx={{ base: "1rem" }}>
            <ListHeader>Contact us</ListHeader>
            <Box
              as="a"
              _hover={{ color: "#ed1b24", fontWeight: "500" }}
              href={"tel:111-111-117"}
            >
              111-111-117
            </Box>

            <Box
              as="a"
              _hover={{ color: "#ed1b24", fontWeight: "500" }}
              href={"mailto:customercare@pakpost.gov.pk"}
            >
              customercare@pakpost.gov.pk
            </Box>

            <Link to={"/suggestions"}>
              <Box _hover={{ color: "#ed1b24", fontWeight: "500" }}>
                Complaints & Suggestions
              </Box>
            </Link>

            <Box
              as="a"
              _hover={{ color: "#ed1b24", fontWeight: "500" }}
              href={"https://goo.gl/maps/Z3urncNCH9Tx4fnGA"}
            >
              Director General Pakistan Post Office, G-8/4 Islamabad.
            </Box>

            <HStack justifyContent={["", "space-between"]} mt={5}>
              <Box
                as="a"
                href={"https://www.facebook.com/PakistanPostOffice.PK"}
                target="blank"
              >
                <AiFillFacebook size={"40"} color="red" />
              </Box>
              <Box
                as="a"
                href={"https://www.instagram.com/pakistan.post/"}
                target="blank"
              >
                <AiFillInstagram size={"40"} color="red" />
              </Box>
              <Box
                as="a"
                href={"https://twitter.com/PakPostOffice"}
                target="blank"
              >
                <AiFillTwitterSquare size={"40"} color="red" />
              </Box>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box as="a" href={"#"} position={"absolute"} bottom={"20"} right={"2"}>
        <TopButton />
      </Box>
    </Box>
  );
}
