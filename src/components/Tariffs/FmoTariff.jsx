import React from 'react';
import {
  Box,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';

const FmoTariff = () => {
  return (
    <Box mx="auto">
      <Table w="100%">
        <Tbody>
          <Tr>
            <h1 className='text-center text-4xl p-4'> Fax Money Order Tariff</h1>
          </Tr>
        </Tbody>
      </Table>
      <Box justify="center">
        <Text fontWeight="bold">
          <Table
            border="1px"
            borderColor="gray.200"
            mx="auto"
            width="100%"
            cellSpacing="1"
            cellPadding="8"
          >
            <Tbody>
              <Tr>
                <Td className="title" color="var(--primary-color)">
                  <br />Effective 19th June, 2023, introductory tariff for the
                  service is as under:-
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Table border="1px" borderColor="gray.200" width="700px">
                    <Tbody>
                      <Tr align="center">
                        <Th className="Head">Service</Th>
                        <Th className="Head">250 Grams</Th>
                        <Th className="Head">500 Grams</Th>
                        <Th className="Head">For every additional 500 Grams</Th>
                      </Tr>
                      <Tr className="content" align="center">
                        <Td fontWeight="bold" className="row">
                          UMS Overnight Local
                        </Td>
                        <Td className="row">Rs. 89/-</Td>
                        <Td className="row">Rs. 111/-</Td>
                        <Td className="row">Rs. 35/-</Td>
                      </Tr>
                      <Tr className="content" align="center">
                        <Td fontWeight="bold" className="row">
                          UMS Overnight City to City
                        </Td>
                        <Td className="row">Rs. 149/-</Td>
                        <Td className="row">Rs. 229/-</Td>
                        <Td className="row">Rs. 113/-</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Td>
              </Tr>
              <Tr>
                <Td className="title" color="var(--primary-color)">
                  <br />*Tariff is inclusive of GST.
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Text>
      </Box>
    </Box>
  );
};

export default FmoTariff;
