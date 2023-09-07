import React from 'react';
import { Box, Table, Tbody, Tr, Td, Text, UnorderedList, ListItem, TableCaption } from '@chakra-ui/react';

const SameDayDelivery = () => {
  return (
    <Box mx="auto">
      <Table w="100%" >
        <Tbody>
          <Tr>
            <Td colSpan="3" valign="top" className="main">
              <div id="main" className="justify">
              <h1 className='text-center text-4xl p-4'>Same Day Delivery Tariff</h1>
                <Table width="100%" borderWidth="0" cellSpacing="1" cellPadding="1" align="center">
                  <Tr>
                    <Td className="title">Same Day Delivery In Twin Cities (Rawalpindi - Islamabad)</Td>
                  </Tr>
                  <Tr>
                    <Td className="content">
                      <Text>
                        Pakistan Post has started a new service for twin cities i.e. Rawalpindi and Islamabad for delivery of Express Post articles on the day of booking.
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className="title" fontSize="15px">
                      Service Features
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className="content">
                      <UnorderedList>
                        <ListItem>Select Pakistan Post’s flexible Same Day Delivery service.</ListItem>
                        <ListItem>Important and urgent items that need immediate delivery.</ListItem>
                        <ListItem>Booking up to 20 kg and delivery up to 5 kg at doorstep.</ListItem>
                        <ListItem>Delivery beyond 5 kg and up to 20 kg on the counter.</ListItem>
                        <ListItem>Ideal for delivery service within twin cities (Islamabad-Rawalpindi).</ListItem>
                        <ListItem>Preferred choice for Business to Business needs.</ListItem>
                        <ListItem>Dedicated handling & support desk.</ListItem>
                        <ListItem>Service will be available in selected areas of twin cities.</ListItem>
                        <ListItem>The delivery information will be communicated through SMS.</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td className="Head">
                      <Text>
                        <strong>Rates</strong>
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className="content">
                      <TableCaption fontSize="15px">
                        <Tr>
                          <Td colSpan="2">
                            <Text className="title">Corporate Customer</Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td width="430">
                            <UnorderedList className="altrow">
                              <ListItem>Upto 0.5 kg</ListItem>
                            </UnorderedList>
                          </Td>
                          <Td width="450" className="altrow">
                            <Text>
                              <strong> Rs. 76/- + 17% GST</strong>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td className="altrow">
                            <UnorderedList>
                              <ListItem>For every additional 500 grams</ListItem>
                            </UnorderedList>
                          </Td>
                          <Td width="450" className="altrow">
                            <Text>
                              <strong>Rs. 25/- + 17% GST</strong>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td></Td>
                          <Td></Td>
                        </Tr>
                        <Tr>
                          <Td colSpan="2">
                            <Text className="title">Regular Customer</Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td width="430" className="altrow">
                            <UnorderedList>
                              <ListItem>Upto 0.5 kg</ListItem>
                            </UnorderedList>
                          </Td>
                          <Td width="450" className="altrow">
                            <Text>
                              <strong> Rs. 128/- + 17% GST</strong>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td className="altrow">
                            <UnorderedList>
                              <ListItem>For every additional 500 grams</ListItem>
                            </UnorderedList>
                          </Td>
                          <Td width="450" className="altrow">
                            <Text>
                              <strong>Rs. 42/- + 17% GST</strong>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td></Td>
                          <Td></Td>
                        </Tr>
                      </TableCaption>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className="Head">
                      <Text color="var(--primary-color)">
                        <strong>FOR SUPPORT AND FEEDBACK</strong>
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className="content">
                      <Table>
                        <Tr>
                          <Td width="431" className="Head" align="center">
                            <Text>
                              <strong>ISLAMABAD</strong>
                            </Text>
                          </Td>
                          <Td width="449" className="Head" align="center">
                            <Text>
                              <strong>RAWALPINDI</strong>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td className="title">
                            <Text align="center">
                              <strong>051-9102440</strong>
                            </Text>
                          </Td>
                          <Td className="title">
                            <Text align="center">
                              <strong>051-9272871</strong>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td className="title">
                            <Text align="center">
                              <strong>051-9102437</strong>
                            </Text>
                          </Td>
                          <Td className="title">
                            <Text align="center">
                              <strong>0333-5476442</strong>
                            </Text>
                          </Td>
                        </Tr>
                      </Table>
                    </Td>
                  </Tr>
                </Table>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default SameDayDelivery;
