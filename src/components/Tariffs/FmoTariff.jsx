import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Text,
  TableContainer,
} from "@chakra-ui/react";
import BackButton from "../Extras/BackButton";

const FmoTariff = () => {
  return (
    <Box mx="auto">
      <Table w="100%">
        <Tbody>
          <Tr>
            <h1 className="text-center text-4xl p-4 text-[red] font-bold">
              {" "}
              Fax Money Order Tariff
            </h1>
          </Tr>
        </Tbody>
      </Table>
      <BackButton />
      <TableContainer
        border="1px"
        borderColor="gray.200"
        mx="auto"
        my={"2rem"}
        width={{ base: "90%", md: "80%" }}
      >
        <Table cellSpacing="1" cellPadding="8">
          <Thead fontWeight={"bold"}>
            <Td colSpan={"2"}>Amount (Rs.)</Td>
            <Td>Commission (Rs)</Td>
          </Thead>
          <Tbody>
            <Tr>
              <Td>From</Td>
              <Td>To</Td>
              <Td>Rates</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>25,000</Td>
              <Td>150</Td>
            </Tr>
            <Tr>
              <Td>25,001</Td>
              <Td>50,000</Td>
              <Td>300</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
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

export default FmoTariff;
