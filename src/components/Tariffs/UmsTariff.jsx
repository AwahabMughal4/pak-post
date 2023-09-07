import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  TableCaption,
} from '@chakra-ui/react';

const UmsTariff = () => {
  return (
    <Box mx="auto">
      <div>
      <h1 className='text-center text-4xl p-4'> Urgent Mail Service Tariff</h1>
        <Table variant="simple" size="sm" borderColor="gray.200">
          <TableCaption>
            <Text fontWeight="bold" color="var(--primary-color)">
              Client Type: Regular
            </Text>
          </TableCaption>
          <Thead>
            <Tr>
              <Th colSpan="2">Weight (grams)</Th>
              <Th>Tariff (Rs)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>250</Td>
              <Td>150</Td>
            </Tr>
            <Tr className="bg-gray-100">
              <Td>251</Td>
              <Td>500</Td>
              <Td>230</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text color="var(--primary-color)" fontSize="sm" mt="2">
          <b>Note:</b> Additional 75 Rs. will be charged for every additional 500 gm. Tariff is inclusive of GST.
        </Text>
      </div>
      <div>
        <Table variant="simple" size="sm" borderColor="gray.200" mt="4">
          <TableCaption>
            <Text fontWeight="bold" color="var(--primary-color)">
              Client Type: Regular Local
            </Text>
          </TableCaption>
          <Thead>
            <Tr>
              <Th colSpan="2">Weight (grams)</Th>
              <Th>Tariff (Rs)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>250</Td>
              <Td>90</Td>
            </Tr>
            <Tr className="bg-gray-100">
              <Td>251</Td>
              <Td>500</Td>
              <Td>110</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text color="var(--primary-color)" fontSize="sm" mt="2">
          <b>Note:</b> Additional 45 Rs. will be charged for every additional 500 gm. Tariff is inclusive of GST.
        </Text>
      </div>
      <div>
        <Table variant="simple" size="sm" borderColor="gray.200" mt="4">
          <Thead>
            <Tr>
              <Th colSpan="4" py="2" px="4" textAlign="center" bgColor="gray.200">
                Client Type: Corporate
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colSpan="4" py="2" px="4">
                <Text fontWeight="semibold">
                  Note: Corporate and Bulk Customers may contact local Postal Officers, Deputy Postmasters General, or Postmasters General for discounted tariff
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
      <div mt="4">
        <Text fontSize="xl" fontWeight="bold" mb="2" color="var(--primary-color)">
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
      </div>
    </Box>
  );
};

export default UmsTariff;
