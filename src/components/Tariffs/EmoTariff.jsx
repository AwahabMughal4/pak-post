import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import BackButton from "../Extras/BackButton";

const EmoTariff = () => {
  return (
    <Box mx="auto">
      <h1 className="text-center text-4xl p-4 text-[red] font-bold">
        Electronic Money Order
      </h1>
      <BackButton />
      <TableContainer
        w={{ base: "90%", md: "80%" }}
        border="1px"
        borderColor="gray.200"
        mx="auto"
        my={"2rem"}
      >
        <Table>
          <Thead>
            <Tr className="bg-[color:var(--primary-color)]">
              <Th textColor={"white"} fontSize={"md"}>
                Slab
              </Th>
              <Th textColor={"white"} fontSize={"md"}>
                Rate of Commission
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Upto Rs. 1,000</Td>
              <Td>Rs. 60</Td>
            </Tr>
            <Tr>
              <Td>From 1,001 and upto Rs. 25,00</Td>
              <Td>Rs. 100</Td>
            </Tr>
            <Tr>
              <Td>From 25,01 and upto Rs. 5,000</Td>
              <Td>Rs. 150</Td>
            </Tr>
            <Tr>
              <Td>From 5,001 and upto Rs.10,000</Td>
              <Td>Rs. 250</Td>
            </Tr>
            <Tr>
              <Td>From 10,001 and upto Rs. 15,000</Td>
              <Td>Rs. 300</Td>
            </Tr>
            <Tr>
              <Td>From 15,001 and upto Rs. 20,000</Td>
              <Td>Rs. 350</Td>
            </Tr>
            <Tr>
              <Td>From 20,001 and upto Rs. 30,000</Td>
              <Td>Rs. 450</Td>
            </Tr>
            <Tr>
              <Td>From 30,001 and upto Rs. 40,000</Td>
              <Td>Rs. 500</Td>
            </Tr>
            <Tr>
              <Td>From 40,001 and upto Rs. 50,000</Td>
              <Td>Rs. 600</Td>
            </Tr>
            <Tr>
              <Td>From 50,001 and upto Rs. 75,000</Td>
              <Td>Rs. 800</Td>
            </Tr>
            <Tr>
              <Td>From 75,001 and upto Rs. 100,000</Td>
              <Td>Rs. 1000</Td>
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

export default EmoTariff;
