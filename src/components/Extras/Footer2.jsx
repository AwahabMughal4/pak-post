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
import TopButton from "./HomeSubcomponents/TopButton";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27338.283918751833!2d73.05466999360527!3d33.683011657660686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGPO!5e0!3m2!1sen!2s!4v1692263419795!5m2!1sen!2s"
      width="300"
      height="240"
      title="Map"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
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
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop={"2px solid #ed1b24"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={3}>
            <ListHeader>Find us</ListHeader>
            <Box>
              <Map mt={"50"} color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>©2016 to 2023 Pakistan Post Office</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Pages</ListHeader>
            <Box as="a" href={"#"}>
              Home
            </Box>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Careers
            </Box>
            <Box as="a" href={"#"}>
              Official Emails
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Box as="a" href={"#"}>
              Rest Houses
            </Box>
            <Box as="a" href={"#"}>
              UMS Envelopes
            </Box>
            <Box as="a" href={"#"}>
              Reg/UnReg Envelops
            </Box>
            <Box as="a" href={"#"}>
              Active Tenders
            </Box>
            <Box as="a" href={"#"}>
              Delivery Post Office
            </Box>
            <Box as="a" href={"#"}>
              Online Complaints
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"/faqs"}>
              FAQs
            </Box>
            <Box as="a" href={"#"}>
              Privacy
            </Box>
            <Box as="a" href={"#"}>
              Help
            </Box>
            <Box as="a" href={"#"}>
              Queries & Info
            </Box>
          </Stack>
          <Stack>
            <ListHeader>Contact us</ListHeader>
            <Box as="a" href={"#"}>
              111-111-117
            </Box>
            <Box as="a" href={"#"}>
              Customer Support
            </Box>
            <Box as="a" href={"#"}>
              customercare@pakpost.gov.pk
            </Box>
            <HStack justifyContent={"space-between"} mt={5}>
              <Box as="a" href={"#"}>
                <AiFillFacebook size={"40"} color="red" />
              </Box>
              <Box as="a" href={"#"}>
                <AiFillInstagram size={"40"} color="red" />
              </Box>
              <Box as="a" href={"#"}>
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
