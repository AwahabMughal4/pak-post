import React from "react";
import {
  Box,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import BackButton from "../Extras/BackButton";

const CodTariff = () => {
  return (
    <Box mx="auto">
      <Container maxW="container.xl">
        <BackButton />
        <Heading
          as="h1"
          fontSize={["2xl", "4xl"]}
          fontWeight="bold"
          textAlign="center"
          textColor={"red"}
          my={"1rem"}
        >
          Cash On Delivery Tariff
        </Heading>

        <Box mt={4}>
          <Table
            w="full"
            mt={6}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Thead>
              <Tr>
                <Th
                  colSpan={3}
                  className="title"
                  color={"#ed1b24"}
                  fontSize={["xl", "2xl"]}
                >
                  Client Type: Regular
                </Th>
              </Tr>
              <Tr align="center">
                <Th colSpan={2} className="Head">
                  Weight (grams)
                </Th>
                <Th className="Head">Tariff</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="content" align="center" fontWeight="bold">
                <Td>From</Td>
                <Td>To</Td>
                <Td>(Rs)</Td>
              </Tr>
              <Tr className="content" align="center">
                <Td className="row">1</Td>
                <Td className="row">250</Td>
                <Td className="row">87</Td>
              </Tr>
              <Tr className="content" align="center">
                <Td className="altrow">251</Td>
                <Td className="altrow">500</Td>
                <Td className="altrow">122</Td>
              </Tr>
              <Tr className="content" align="center">
                <Td colSpan={3}>
                  <b>Note:</b> Additional Rs. 18 will be charged for every
                  additional 500 gm.
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Client Type: Regular Local */}
        <Table
          w="full"
          mt={6}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Thead>
            <Tr>
              <Th
                colSpan={3}
                className="title"
                color={"#ed1b24"}
                fontSize={["xl", "2xl"]}
              >
                Client Type: Regular Local
              </Th>
            </Tr>
            <Tr align="center">
              <Th colSpan={2} className="Head">
                Weight (grams)
              </Th>
              <Th className="Head">Tariff</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className="content" align="center" fontWeight="bold">
              <Td>From</Td>
              <Td>To</Td>
              <Td>(Rs)</Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="row">1</Td>
              <Td className="row">250</Td>
              <Td className="row">55</Td>
            </Tr>
            <Tr className="content" align="center">
              <Td className="altrow">251</Td>
              <Td className="altrow">500</Td>
              <Td className="altrow">80</Td>
            </Tr>
            <Tr className="content" align="center">
              <Td colSpan={3}>
                <b>Note:</b> Additional Rs. 18 will be charged for every
                additional 500 gm.
              </Td>
            </Tr>
          </Tbody>
        </Table>

        {/* Client Type: Corporate Local */}
        <Table
          w="full"
          mt={6}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Tbody>
            <Tr className="content">
              <Th
                colSpan={4}
                className="title"
                color={"#ed1b24"}
                fontSize={["xl", "2xl"]}
              >
                Client Type: Corporate
              </Th>
            </Tr>
            <Tr className="content">
              <Td colSpan={4}>
                <p style={{ color: "#ed1b24" }}>Note:</p>
                <strong>
                  Corporate and Bulk Customers may contact local Postal
                  Officers, Deputy Postmasters General, or Postmasters General
                  for discounted tariff
                </strong>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>

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

export default CodTariff;
