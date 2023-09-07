import * as React from "react";
import { NewsData, TendersData } from "../../DataObjects/NewsTenders";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const BasicCard = ({ title, date, src }) => {
  return (
    <Card my={"1rem"}>
      <CardHeader>
        <Heading size="md"> {title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{date}</Text>
      </CardBody>
      <CardFooter>
        <a href={src} target="_blank" rel="noopener noreferrer">
          <div className="">View here</div>
        </a>
      </CardFooter>
    </Card>
  );
};

const NewsSection = () => {
  return (
    <div>
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          display={"inline-block"}
          borderBottom={"2px solid red"}
          p={"2"}
        >
          News & Tenders
        </Heading>
      </Center>

      <Flex wrap={{ base: "wrap", sm: "nowrap" }}>
        <Card
          mx={"2rem"}
          my={{ base: "2rem", sm: "0" }}
          shadow={"xl"}
          w={{ base: "90%", sm: "48%" }}
        >
          <Heading m={"1rem"} textColor={"#ED1B24"}>
            News
          </Heading>
          <Box
            bgColor={"gray.200"}
            p={"1rem"}
            h={["75vh", "50vh"]}
            overflowY={"scroll"}
          >
            {NewsData.map((news) => {
              return (
                <BasicCard
                  key={news.id}
                  date={news.date}
                  title={news.title}
                  src={news.url}
                />
              );
            })}
          </Box>

          <Link to={"news"}>
            <Button
              width="200px"
              size="lg"
              backgroundColor={"#ED1B24"}
              color={"white"}
              m={"2rem"}
              display={"flex"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              css={{
                "&:hover": {
                  backgroundColor: "#ca242d",
                },
              }}
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          mx={"1.5rem"}
          my={{ base: "2rem", sm: "0" }}
          shadow={"xl"}
          w={{ base: "90%", sm: "48%" }}
        >
          <Heading m={"1rem"} textColor={"#ED1B24"}>
            Tenders
          </Heading>
          <Box
            bgColor={"gray.200"}
            p={"1rem"}
            h={["75vh", "50vh"]}
            overflowY={"scroll"}
          >
            {TendersData.map((news) => {
              return (
                <BasicCard
                  key={news.id}
                  title={news.title}
                  date={news.title2}
                  src={news.url}
                />
              );
            })}
          </Box>

          <Link to={"news"}>
            <Button
              width="200px"
              size="lg"
              backgroundColor={"#ED1B24"}
              color={"white"}
              m={"2rem"}
              display={"flex"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              css={{
                "&:hover": {
                  backgroundColor: "#ca242d",
                },
              }}
            >
              Read more
            </Button>
          </Link>
        </Card>
      </Flex>
    </div>
  );
};

export default NewsSection;
