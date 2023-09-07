import React from "react";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  UnorderedList,
  ListItem,
  TableContainer,
} from "@chakra-ui/react";

const SameDayDelivery = () => {
  return (
    <Box mx="auto">
      <Table w="100%">
        <Tbody>
          <Tr>
            <Td colSpan="3" valign="top" className="main">
              <div id="main" className="justify">
                <h1 className="text-center text-4xl p-4 text-[red] font-bold">
                  Same Day Delivery Tariff
                </h1>
                <Table
                  width="100%"
                  borderWidth="0"
                  cellSpacing="1"
                  cellPadding="1"
                  align="center"
                >
                  <Tr>
                    <Td className="title text-xl p-4 text-[red]">
                      Same Day Delivery In Twin Cities (Rawalpindi - Islamabad)
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className="content">
                      <Text>
                        Pakistan Post has started a new service for twin cities
                        i.e. Rawalpindi and Islamabad for delivery of Express
                        Post articles on the day of booking.
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
                        <ListItem>
                          Select Pakistan Post’s flexible Same Day Delivery
                          service.
                        </ListItem>
                        <ListItem>
                          Important and urgent items that need immediate
                          delivery.
                        </ListItem>
                        <ListItem>
                          Booking up to 20 kg and delivery up to 5 kg at
                          doorstep.
                        </ListItem>
                        <ListItem>
                          Delivery beyond 5 kg and up to 20 kg on the counter.
                        </ListItem>
                        <ListItem>
                          Ideal for delivery service within twin cities
                          (Islamabad-Rawalpindi).
                        </ListItem>
                        <ListItem>
                          Preferred choice for Business to Business needs.
                        </ListItem>
                        <ListItem>Dedicated handling & support desk.</ListItem>
                        <ListItem>
                          Service will be available in selected areas of twin
                          cities.
                        </ListItem>
                        <ListItem>
                          The delivery information will be communicated through
                          SMS.
                        </ListItem>
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
                      <Tr>
                        <Td>
                          <Text className="title text-[red] font-bold">
                            Corporate Customer
                          </Text>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>Upto 0.5 kg</Td>
                        <Td>Rs. 76/- + 17% GST</Td>
                      </Tr>
                      <Tr>
                        <Td>For every additional 500 grams</Td>
                        <Td>Rs. 25/- + 17% GST</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Text className="title text-[red] font-bold">
                            Regular Customer
                          </Text>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>Upto 0.5 kg</Td>
                        <Td>Rs. 128/- + 17% GST</Td>
                      </Tr>
                      <Tr>
                        <Td>For every additional 500 grams</Td>
                        <Td>Rs. 25/- + 17% GST</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td></Td>
                      </Tr>
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
                      <TableContainer w={"80%"} mx={"auto"}>
                        <Table>
                          <Tr>
                            <Td className="Head" fontWeight={"bold"}>
                              ISLAMABAD
                            </Td>
                            <Td className="Head" fontWeight={"bold"}>
                              RAWALPINDI
                            </Td>
                          </Tr>
                          <Tr>
                            <Td className="title">051-9102440</Td>
                            <Td className="title">051-9272871</Td>
                          </Tr>
                          <Tr>
                            <Td className="title">051-9102437</Td>
                            <Td className="title">0333-5476442</Td>
                          </Tr>
                        </Table>
                      </TableContainer>
                    </Td>
                  </Tr>
                </Table>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Box w={{ base: "90%", md: "90%" }} mx={"auto"} my={"2rem"}>
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

export default SameDayDelivery;
