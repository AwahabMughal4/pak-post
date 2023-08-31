import * as React from "react";
import { News, Tenders } from "../../DataObjects/data";
import { Center, Heading } from "@chakra-ui/react";

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
    <Card>
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
    <>
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

      <div className="flex flex-col justify-center h-[75vh] bg-gray-200 p-5 my-10 md:flex-row">
        <div className="news w-[50%] h-[100%]  bg-white mx-20 px-3 ">
          <h1 className="text-3xl  text-[color:var(--primary-color)] border-b-2 border-[color:var(--primary-color)] py-1 mb-6 inline-block">
            News
          </h1>
          <div className=" p-3 overflow-y-auto h-[70%] bg-gray-200">
            {News.map((news) => {
              return (
                <BasicCard key={news.id} date={news.date} title={news.title} />
              );
            })}
          </div>
          <button className="my-4 px-4 py-3 bg-[color:var(--primary-color)] hover:bg-[color:var(--secondary-color)] cursor-pointer text-white">
            Read More
          </button>
        </div>
        <div className="border-r-2 border-[color:var(--primary-color)] h-[70%] m-auto"></div>
        <div className="tenders w-[50%] h-[100%]  bg-white mx-20 px-3 ">
          <h1 className="text-3xl  text-[color:var(--primary-color)] border-b-2 border-[color:var(--primary-color)] py-1 mb-6 inline-block">
            Tender
          </h1>
          <div className=" p-3 overflow-y-auto  h-[70%] bg-gray-200">
            {Tenders.map((news) => {
              return (
                <BasicCard key={news.id} title={news.title} date={news.date} />
              );
            })}
          </div>
          <button className="my-4 px-4 py-3 bg-[color:var(--primary-color)] hover:bg-[color:var(--secondary-color)] cursor-pointer text-white">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
