import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const FmsTariff = () => {
  return (
    <Box mx="auto">
         <h1 className='text-center text-4xl p-4'> Fax Mail Service Tariff</h1>
      <Table w="full">
        <Tbody>
          <Tr>
            <Td className="content" color="var(--primary-color)">
              Fax Mail Service booking tariff shall be charged in cash for each
              page of letter or each page of document up to A-4 size without
              exception as detailed below:
            </Td>
          </Tr>
          <Tr>
            <Td>
              <br />
              <Table w="3/4" mx="auto" cellSpacing="1" align="center">
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
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default FmsTariff;
