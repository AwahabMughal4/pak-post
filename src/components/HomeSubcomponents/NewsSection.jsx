import * as React from "react";
import { News, Tenders } from "../../DataObjects/data";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";
const BasicCard = (props) => {
  return (
    <Card my={"1rem"}>
      <CardHeader>
        <Heading size="md"> {props.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{props.date}</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
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
        <Card mx={"2rem"} my={{ base: "2rem", sm: "0" }} shadow={"xl"}>
          <Heading m={"1rem"} textColor={"#ED1B24"}>
            News
          </Heading>
          <Box
            bgColor={"gray.200"}
            p={"1rem"}
            h={["75vh", "50vh"]}
            overflowY={"scroll"}
          >
            {News.map((news) => {
              return (
                <BasicCard key={news.id} date={news.date} title={news.title} />
              );
            })}
          </Box>

          <Button
            as="a"
            href={"/news"}
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
        </Card>
        <Card mx={"2rem"} my={{ base: "2rem", sm: "0" }} shadow={"xl"}>
          <Heading m={"1rem"} textColor={"#ED1B24"}>
            Tenders
          </Heading>
          <Box
            bgColor={"gray.200"}
            p={"1rem"}
            h={["75vh", "50vh"]}
            overflowY={"scroll"}
          >
            {Tenders.map((news) => {
              return (
                <BasicCard key={news.id} title={news.title} date={news.date} />
              );
            })}
          </Box>

          <Button
            as="a"
            href={"/news"}
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
        </Card>
      </Flex>
    </div>
  );
};

export default NewsSection;
