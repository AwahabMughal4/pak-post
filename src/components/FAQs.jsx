"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Center,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Questions } from "../DataObjects/data";

const Sections = ({ question, answer }) => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  return (
    <AccordionItem>
      <AccordionButton
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={isLargerThan62 ? "4" : "2"}
        _hover={{ bg: "#ed1b24", color: "white" }}
        _expanded={{ bg: "#ed1b24", color: "white" }}
      >
        <Text fontSize="md">{question}</Text>
        <ChevronDownIcon fontSize="24px" />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color="gray.600">{answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default function FAQs() {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  return (
    <>
      <Center>
        <Text
          fontSize={isLargerThan62 ? "5xl" : "4xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          py={"5"}
          px={isLargerThan62 ? "5" : "2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
          display={"inline-block"}
          textAlign={"center"}
          mt={"5"}
        >
          Frequently Asked Questions
        </Text>
      </Center>
      <Flex
        minH={"100vh"}
        w={"80%"}
        m={"auto"}
        my={5}
        py={"10"}
        px={isLargerThan62 ? "10" : "4"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box w={"100%"}>
          <Accordion
            allowToggle
            width={"100%"}
            minW={"lg"}
            bg={"white"}
            rounded={"lg"}
          >
            {Questions.map((Questions) => {
              return (
                <Sections
                  question={Questions.question}
                  answer={Questions.answer}
                />
              );
            })}
          </Accordion>
        </Box>
      </Flex>
    </>
  );
}
