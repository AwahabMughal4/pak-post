import React from 'react';
import {
  Box,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
} from '@chakra-ui/react';

const EmoTariff = () => {
  const primaryColor = useColorModeValue('red.500', 'red.300');

  return (
    <Box mx="auto">
      <Container maxW="container.xl">
        <h1 className='text-center text-4xl p-4'>Electronic Money Order</h1>
        <Table
          w="100%"
          border="1px"
          borderColor="gray.200"
          borderRadius="lg"
          mx="auto"
          textAlign="center"
          cellSpacing="1"
          cellPadding="8"
        >
          <Thead>
            <Tr className='bg-[color:var(--primary-color)] '>
              <Th colSpan="4" className="Head ">
                <h1 className='text-white'>Slab</h1>
                
              </Th>
              <Th colSpan="4" className="Head">
                <h1 className='text-white'>Rate of Commission</h1>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colSpan="4" className="row">
                Upto Rs. 1,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 60
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="altrow">
                From 1,001 and upto Rs. 25,00
              </Td>
              <Td colSpan="4" className="altrow">
                Rs. 100
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="row">
                From 25,01 and upto Rs. 5,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 150
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="altrow">
                From 5,001 and upto Rs.10,000
              </Td>
              <Td colSpan="4" className="altrow">
                Rs. 250
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="row">
                From 10,001 and upto Rs. 15,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 300
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="altrow">
                From 15,001 and upto Rs. 20,000
              </Td>
              <Td colSpan="4" className="altrow">
                Rs. 350
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="row">
                From 20,001 and upto Rs. 30,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 450
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="altrow">
                From 30,001 and upto Rs. 40,000
              </Td>
              <Td colSpan="4" className="altrow">
                Rs. 500
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="row">
                From 40,001 and upto Rs. 50,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 600
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="row">
                From 50,001 and upto Rs. 75,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 800
              </Td>
            </Tr>
            <Tr>
              <Td colSpan="4" className="row">
                From 75,001 and upto Rs. 100,000
              </Td>
              <Td colSpan="4" className="row">
                Rs. 1000
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default EmoTariff;
