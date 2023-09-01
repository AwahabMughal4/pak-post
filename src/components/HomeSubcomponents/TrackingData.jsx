import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import {
  Spinner,
  Heading,
  Card,
  Box,
  Flex,
  Text,
  Divider,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";

const TrackingData = () => {
  const { articleId } = useParams();
  const [data, setResponseData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post("http://localhost:3001/track", {
          articleId: articleId,
        });

        setResponseData(response.data);
      } catch (error) {
        console.error("Error:", error);
        // Handle error here
      }
    };
    fetchData();
  }, [articleId]); // Run this effect whenever articleId changes
  console.log(data);
  return (
    <div>
      <Heading textColor={"#ed1b24"} textAlign={"center"} m={"2rem"}>
        Tracking
      </Heading>
      {data ? (
        <Card
          w={"80%"}
          boxShadow="dark-lg"
          p={"2rem"}
          my={"3rem"}
          mx={"auto"}
          rounded="md"
          bg="white"
        >
          <Box>
            <Heading textColor={"#ed1b24"} fontSize={"2rem"}>
              Tracking Data
            </Heading>
            <Flex wrap={"wrap"}>
              <Box
                w={"40%"}
                mx={"auto"}
                my={"0.5rem"}
                boxShadow="base"
                p="3"
                rounded="md"
                bg="white"
              >
                <Text textColor={"#ed1b24"} fontWeight={"bold"}>
                  Article Tracking Number:
                </Text>
                {data.ArticleTrackingNo}
              </Box>
              <Box
                w={"40%"}
                mx={"auto"}
                my={"0.5rem"}
                boxShadow="base"
                p="3"
                rounded="md"
                bg="white"
              >
                <Text textColor={"#ed1b24"} fontWeight={"bold"}>
                  Booking Time:
                </Text>
                {data.BookingDate}
              </Box>
              <Box
                w={"40%"}
                mx={"auto"}
                my={"0.5rem"}
                boxShadow="base"
                p="3"
                rounded="md"
                bg="white"
              >
                <Text textColor={"#ed1b24"} fontWeight={"bold"}>
                  Booking Office:
                </Text>
                {data.BookingOffice}
              </Box>
              <Box
                w={"40%"}
                mx={"auto"}
                my={"0.5rem"}
                boxShadow="base"
                p="3"
                rounded="md"
                bg="white"
              >
                <Text textColor={"#ed1b24"} fontWeight={"bold"}>
                  Delivery Office:
                </Text>
                {data.DeliveryOffice}
              </Box>
            </Flex>
          </Box>
          <Divider color={"#ed1b24"} m={"0.5rem"} />
          <Box>
            <Heading textColor={"#ed1b24"} fontSize={"2rem"}>
              Dispatch Events
            </Heading>

            <VStack>
              {data.Event.map((event, index) => (
                <Box
                  key={index}
                  w={"95%"}
                  mx={"auto"}
                  my={"0.5rem"}
                  boxShadow="base"
                  p="3"
                  rounded="md"
                  bg="white"
                >
                  <Text textColor={"#ed1b24"} fontWeight={"bold"}>
                    {event.Date}
                  </Text>
                  {event.EventsDetails.map((detail, detailIndex) => (
                    <Box
                      key={detailIndex}
                      w={"95%"}
                      mx={"auto"}
                      my={"0.5rem"}
                      boxShadow="base"
                      p="3"
                      rounded="md"
                      bg="white"
                    >
                      <HStack>
                        <Box w={"15%"} h={"30%"}>
                          {detail.Time.map((time, timeIndex) => (
                            <Box
                              key={timeIndex}
                              mx={"auto"}
                              my={"0.5rem"}
                              boxShadow="base"
                              p="2"
                              rounded="md"
                              bg="white"
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: time,
                                }}
                              />
                            </Box>
                          ))}
                        </Box>

                        <Box w={"20%"} h={"30%"}>
                          {detail.Location.map((loc, locIndex) => (
                            <Box
                              key={locIndex}
                              mx={"auto"}
                              my={"0.5rem"}
                              boxShadow="base"
                              p="2"
                              rounded="md"
                              bg="white"
                              h={"30%"}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: loc,
                                }}
                              />
                            </Box>
                          ))}
                        </Box>
                        <Box w={"65%"}>
                          {detail.Description.map((desc, descIndex) => (
                            <Box
                              key={descIndex}
                              mx={"auto"}
                              my={"0.5rem"}
                              boxShadow="base"
                              p="2"
                              rounded="md"
                              bg="white"
                              h={"30%"}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: desc,
                                }}
                              />
                            </Box>
                          ))}
                        </Box>
                      </HStack>
                    </Box>
                  ))}
                </Box>
              ))}
            </VStack>
          </Box>
        </Card>
      ) : (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="white"
            color="#ed1b24"
            size="xl"
            m={"3rem"}
          />
        </Center>
      )}
    </div>
  );
};

export default TrackingData;
