import * as React from "react";
import { NewsData, TendersData } from "../../DataObjects/NewsTenders";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

import { Card, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewsCard = ({ title, date, src }) => {
  return (
    <Card my={"0.5rem"}>
      <Heading size="sm" m={"0.5rem"}>
        {" "}
        {title}
      </Heading>

      <Text m={"0.5rem"}>{date}</Text>

      <Button as={"a"} href={src} target={"blank"} m={"0.5rem"} w={"100px"}>
        View here
      </Button>
    </Card>
  );
};

const TendersCard = ({ title, title2, date, src, src2 }) => {
  return (
    <Card my={"0.5rem"}>
      <Heading size="sm" m={"0.5rem"}>
        {" "}
        {title}
      </Heading>
      <a href={src2} target={"blank"}>
        <Text m={"0.5rem"}>{title2}</Text>
      </a>
      <Text m={"0.5rem"}>{date}</Text>

      <Button as={"a"} href={src} target={"blank"} m={"0.5rem"} w={"100px"}>
        View here
      </Button>
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
            {NewsData.slice()
              .sort((a, b) => b.id - a.id)
              .map((news) => {
                return (
                  <NewsCard
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
            {TendersData.slice()
              .sort((a, b) => b.id - a.id)
              .map((tenders) => {
                return (
                  <TendersCard
                    key={tenders.id}
                    title={tenders.title}
                    title2={tenders.title2}
                    date={tenders.date}
                    src={tenders.url}
                    src2={tenders.url2}
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
