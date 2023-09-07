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
                w={{ base: "100%", md: "40%" }}
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
                w={{ base: "100%", md: "40%" }}
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
                w={{ base: "100%", md: "40%" }}
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
                w={{ base: "100%", md: "40%" }}
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

            {data.Event.map((event, index) => (
              <Flex key={index} flexDirection={"column"} my={"1rem"}>
                <Text textColor={"#ed1b24"} fontWeight={"bold"} pl={"0.5rem"}>
                  {event.Date}
                </Text>
                {event.EventsDetails.map((detail, detailIndex) => (
                  <Flex
                    key={detailIndex}
                    flexDirection={"column"}
                    w={"90%"}
                    mx={"auto"}
                    my={"1rem"}
                  >
                    {detail.SubEvent.map((time, timeIndex) => (
                      <Flex
                        key={timeIndex}
                        flexDirection={"column"}
                        boxShadow="base"
                        rounded="md"
                        my={"0.5rem"}
                        py={"0.5rem"}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: time.Time,
                          }}
                          style={{
                            paddingLeft: "1rem",
                            color: "#ed1b24",
                            fontWeight: "500",
                          }}
                        />
                        <Box>
                          {time.SubEventsDetails.map((sub, subIndex) => (
                            <Flex
                              key={subIndex}
                              w={"100%"}
                              flexDirection={{ base: "column", md: "row" }}
                              my={{ base: "1rem", md: "0" }}
                            >
                              <Flex
                                w={{ base: "100%", md: "30%" }}
                                justifyContent={"center"}
                                my={{ base: "0.5rem", md: "0" }}
                              >
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: sub.Location,
                                  }}
                                />
                              </Flex>
                              <Flex
                                w={{ base: "100%", md: "70%" }}
                                textAlign={{ base: "center", md: "none" }}
                                justifyContent={{ base: "center", md: "left" }}
                                my={{ base: "0.5rem", md: "0" }}
                              >
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: sub.Description,
                                  }}
                                />
                              </Flex>
                            </Flex>
                          ))}
                        </Box>
                      </Flex>
                    ))}
                  </Flex>
                ))}
              </Flex>
            ))}
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
