import React from 'react';
import {
  Box,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

const CodTariff = () => {
  const primaryColor = useColorModeValue('red.500', 'red.300');

  return (
    <Box mx="auto">
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={['2xl', '4xl']} fontWeight="bold" textAlign="center">
          Cash On Delivery Tariff
        </Heading>
        

        {/* Fax Mail Service */}
        <Table w="100%" mt={4}>
          <Tbody>
            <Tr>
              <Td className="content" color={primaryColor}>
                Fax Mail Service booking tariff shall be charged in cash for each page of letter or each page of document up to A-4 size without exception as detailed below:
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Box mt={4}>
          <Table w={['full', '3/4']} mx="auto" cellSpacing="1" align="center">
            <Tbody>
              <Tr align="center">
                <Td className="row">For entire country</Td>
                <Td className="row">Rs. 35/-</Td>
              </Tr>
              <Tr align="center">
                <Td className="row">Between Rawalpindi and Islamabad and vice versa</Td>
                <Td className="row">Rs. 20/-</Td>
              </Tr>
              <Tr className="content" align="center">
                <Td colSpan="3">
                  <b>Note:</b> Additional Rs. 38 will be charged for every additional 500 gm.
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Client Type: Regular Local */}
        <Table w="full" mt={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Thead>
            <Tr>
              <Th colSpan={3} className="title" color={primaryColor}>
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
                <b>Note:</b> Additional Rs. 18 will be charged for every additional 500 gm.
              </Td>
            </Tr>
          </Tbody>
        </Table>

        {/* Client Type: Corporate Local */}
        <Table w="full" mt={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Tbody>
            <Tr className="content">
              <Td colSpan={4} className="title" color={primaryColor}>
                Client Type: Corporate Local
              </Td>
            </Tr>
            <Tr className="content">
              <Td colSpan={4}>
                <p style={{ color: primaryColor }}>Note:</p>
                <strong>Corporate and Bulk Customers may contact local Postal Officers, Deputy Postmasters General, or Postmasters General for discounted tariff</strong>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default CodTariff;
