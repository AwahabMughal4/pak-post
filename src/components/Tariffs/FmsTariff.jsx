import React from "react";
import { Box, Table, Tbody, Tr, Td, Text } from "@chakra-ui/react";

const FmsTariff = () => {
  return (
    <Box mx="auto">
      <h1 className="text-center text-4xl p-4 text-[red] font-bold">
        {" "}
        Fax Mail Service Tariff
      </h1>
      <Text
        className="content"
        color="var(--primary-color)"
        w={{ base: "90%", md: "80%" }}
        mx="auto"
        my={"2rem"}
      >
        Fax Mail Service booking tariff shall be charged in cash for each page
        of letter or each page of document up to A-4 size without exception as
        detailed below:
      </Text>

      <Table
        w={{ base: "90%", md: "50%" }}
        mx="auto"
        my={"2rem"}
        cellSpacing="1"
        align="center"
      >
        <Tbody>
          <Tr align="center">
            <Td className="row">For entire country</Td>
            <Td className="row">Rs. 35/-</Td>
          </Tr>
          <Tr align="center">
            <Td className="row">
              Between Rawalpindi and Islamabad and vice versa
            </Td>
            <Td className="row">Rs. 20/-</Td>
          </Tr>
        </Tbody>
      </Table>
      <Box w={{ base: "90%", md: "50%" }} mx={"auto"} my={"2rem"}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          mb="2"
          color="var(--primary-color)"
        >
          GST
        </Text>
        <div>
          <Text>
            <b>Islamabad:</b> 16%
          </Text>
          <Text>
            <b>Pakhtunkhwa:</b> 15%
          </Text>
          <Text>
            <b>Punjab:</b> 16%
          </Text>
          <Text>
            <b>Sindh:</b> 13%
          </Text>
          <Text>
            <b>Balochistan:</b> 15%
          </Text>
        </div>
      </Box>
    </Box>
  );
};

export default FmsTariff;
