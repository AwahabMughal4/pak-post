import React from "react";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Thead,
  TableContainer,
} from "@chakra-ui/react";

const UmsOverNight = () => {
  return (
    <Box mx="auto">
      <Table w="100%">
        <Tbody>
          <Tr>
            <h1 className="text-center text-4xl p-4 text-[red] font-bold">
              {" "}
              UMS Overnight Tariff
            </h1>
          </Tr>
        </Tbody>
      </Table>
      <Text w={"80%"} mx={"auto"} my={"2rem"}>
        Effective 19th June, 2023, introductory tariff for the service is as
        under:-
      </Text>
      <TableContainer
        className="border border-collapse mx-auto"
        w={{ base: "90%", md: "80%" }}
        mx={"auto"}
      >
        <Table cellSpacing="1" cellPadding="8">
          <Thead>
            <Td>Service</Td>
            <Td>250 Grams</Td>
            <Td>500 Grams</Td>
            <Td>For every additional 500 Grams</Td>
          </Thead>
          <Tbody>
            <Tr>
              <Td>UMS Overnight Local</Td>
              <Td>Rs. 89/-</Td>
              <Td>Rs. 111/-</Td>
              <Td>Rs. 35/-</Td>
            </Tr>
            <Tr>
              <Td>UMS Overnight City to City</Td>
              <Td>Rs. 149/-</Td>
              <Td>Rs. 229/-</Td>
              <Td>Rs. 113/-</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Text w={"80%"} mx={"auto"} my={"2rem"}>
        *Tariff is inclusive of GST.
      </Text>
      <Box w={{ base: "90%", md: "80%" }} mx={"auto"} my={"2rem"}>
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

export default UmsOverNight;
