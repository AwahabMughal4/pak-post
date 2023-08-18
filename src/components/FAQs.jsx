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
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Questions } from "../DataObjects/data";

const Sections = ({ question, answer }) => {
  return (
    <AccordionItem>
      <AccordionButton
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={4}
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
  return (
    <>
      <Center>
        <Text
          fontSize={"5xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"5"}
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
        p={"10"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box w={"100%"}>
          <Accordion
            allowMultiple
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
