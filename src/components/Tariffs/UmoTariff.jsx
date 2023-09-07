import React from "react";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  TableContainer,
  Thead,
} from "@chakra-ui/react";

const UmoTariff = () => {
  return (
    <Box mx="auto">
      <h1 className="text-center text-4xl p-4 text-[red] font-bold">
        UMO Tariff
      </h1>
      <h3 className="text-center text-xl p-4 ">
        Urgent Money Order (UMO) Fee/Commission in Case of UMS-CASH On Delivery
        (COD)
      </h3>
      <TableContainer
        w={{ base: "90%", md: "80%" }}
        borderWidth="1px"
        borderColor="gray.200"
        bg="white"
        mx={"auto"}
        my={"2rem"}
      >
        <Table>
          <Thead fontWeight={"bold"}>
            <Tr>
              <Td className="Head" align="center">
                Category
              </Td>
              <Td className="Head" align="center">
                Value
              </Td>
              <Td className="Head" align="center">
                Fee/Commission Chargeable
              </Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              style={{ fontWeight: "bold" }}
              className="content"
              align="center"
            >
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="row">UMO (Local)</Td>
              <Td className="row">Upto Rs. 10,000/-</Td>
              <Td className="row">
                <strong>Rs. 135/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="altrow">UMO (City to City)</Td>
              <Td className="altrow">Upto Rs. 10,000/-</Td>
              <Td className="altrow">
                <strong>Rs. 175/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="row">UMO (Local)</Td>
              <Td className="row">Upto Rs. 10,001/- to Rs. 20,000/-</Td>
              <Td className="row">
                <strong>Rs. 160/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="altrow">UMO (City to City)</Td>
              <Td className="altrow">Upto Rs. 10,001/- to Rs. 20,000/-</Td>
              <Td className="altrow">
                <strong>Rs. 200/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="row">UMO (Local)</Td>
              <Td className="row">Upto Rs. 20,000/- to Rs. 50,000/-</Td>
              <Td className="row">
                <strong>Rs. 185/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="altrow">UMO (City to City)</Td>
              <Td className="altrow">Upto Rs. 20,000/- to Rs. 50,000/-</Td>
              <Td className="altrow">
                <strong>Rs. 225/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="row">UMO (Local)</Td>
              <Td className="row">Upto Rs. 50,000/- to Rs. 100,000/-</Td>
              <Td className="row">
                <strong>Rs. 210/-</strong>
              </Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="altrow">UMO (City to City)</Td>
              <Td className="altrow">Upto Rs. 50,000/- to Rs. 100,000/-</Td>
              <Td className="altrow">
                <strong>Rs. 250/-</strong>
              </Td>
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

export default UmoTariff;
