import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Input,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import Axios from "axios";

import DPOCodes from "../assets/PostalCodesPDF/National Delivery Post Office Postal Codes.pdf";
import NDPOCodes from "../assets/PostalCodesPDF/National Non Delivery Post Office Postal Codes.pdf";

function PostCodes() {
  return (
    <Box>
      <Center>
        <Text
          fontSize={"3xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"5"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
          display={"inline-block"}
          textAlign={"center"}
          m={"5"}
        >
          Postal Codes
        </Text>
      </Center>
      <Text
        textAlign={"justify"}
        w={"80%"}
        m={"auto"}
        color={"gray.600"}
        fontSize={{ base: "sm", sm: "lg" }}
      >
        To enhance the efficiency of mail delivery and streamline the sorting
        process, every region in Pakistan has been allocated a unique postal
        code. This comprehensive and easily accessible postal code directory
        encompasses both delivery and non-delivery post offices, ensuring
        accurate mail handling and swift delivery. You can conveniently search
        for postcodes right here.
        <br />
        <br />
        Click below given links to download the New Post Code Directory:-
        <br />
        <br />
        <a href={NDPOCodes} target="blank">
          <Button variant={"link"} colorScheme={"red"} size={"md"}>
            POST CODE DIRECTORY OF NON DELIVERY POST OFFICES
          </Button>
        </a>
        <br />
        <br />
        <a href={DPOCodes} target="blank">
          <Button variant={"link"} colorScheme={"red"} size={"md"}>
            POST CODE DIRECTORY OF DELIVERY POST OFFICES
          </Button>
        </a>
      </Text>
      <NDPostOffices />
      <DPostOffices />
    </Box>
  );
}

export default PostCodes;

function NDPostOffices() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/NDPostOffices")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredResults = data.filter((item) => {
      return (
        item.non_delivery_post_office
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        item.post_code.toLowerCase().includes(query.toLowerCase()) ||
        item.account_office.toLowerCase().includes(query.toLowerCase()) ||
        item.province.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredData(filteredResults);
  };

  return (
    <Box w={"80%"} mx={"auto"} my={"3rem"}>
      <Center>
        <Text
          fontSize={"2xl"}
          color={"white"}
          bgColor={"#ed1b24"}
          p={"2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
          display={"inline-block"}
          textAlign={"center"}
          mt={"5"}
        >
          Non Delivery Post Offices
        </Text>
      </Center>
      <Input
        type="text"
        fontWeight={"bold"}
        borderColor={"black.200"}
        focusBorderColor="#ED1B24"
        h={"40px"}
        w={"30%"}
        my={"1rem"}
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <TableContainer
        h={"100vh"}
        overflowY={"scroll"}
        shadow={"dark-lg"}
        borderRadius={"10px"}
        css={{
          "&::-webkit-scrollbar": {
            width: "0em", // Set a small width (can be any value)
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent", // Hide the thumb
          },
        }}
      >
        <Table>
          <Thead
            bgColor={"#ed1b24"}
            position={"sticky"}
            top={"0"}
            zIndex={"3"}
            borderRadius={"10px"}
            h={"3rem"}
          >
            <Tr>
              <Th textColor={"white"} fontSize={"md"}>
                S.No.
              </Th>
              <Th textColor={"white"} fontSize={"md"}>
                Non Delivery Post Office
              </Th>
              <Th textColor={"white"} fontSize={"md"} isNumeric>
                Post Code
              </Th>
              <Th textColor={"white"} fontSize={"md"}>
                Account Office
              </Th>
              <Th textColor={"white"} fontSize={"md"}>
                Province
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((item) => (
              <Tr key={item.id}>
                <Td isNumeric>{item.id}</Td>
                <Td>{item.non_delivery_post_office}</Td>
                <Td isNumeric>{item.post_code}</Td>
                <Td>{item.account_office}</Td>
                <Td>{item.province}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function DPostOffices() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/DPostOffices")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredResults = data.filter((item) => {
      return (
        item.delivery_post_office.toLowerCase().includes(query.toLowerCase()) ||
        item.post_code.toLowerCase().includes(query.toLowerCase()) ||
        item.account_office.toLowerCase().includes(query.toLowerCase()) ||
        item.province.toLowerCase().includes(query.toLowerCase()) ||
        item.code_attached_branch.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredData(filteredResults);
  };

  return (
    <Box w={"80%"} mx={"auto"} my={"3rem"}>
      <Center>
        <Text
          fontSize={"2xl"}
          color={"white"}
          bgColor={"#ed1b24"}
          p={"2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
          display={"inline-block"}
          textAlign={"center"}
          mt={"5"}
        >
          Delivery Post Offices
        </Text>
      </Center>
      <Input
        type="text"
        fontWeight={"bold"}
        borderColor={"black.200"}
        focusBorderColor="#ED1B24"
        h={"40px"}
        w={"30%"}
        my={"1rem"}
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <TableContainer
        h={"100vh"}
        overflowY={"scroll"}
        shadow={"dark-lg"}
        borderRadius={"10px"}
        css={{
          "&::-webkit-scrollbar": {
            width: "0em", // Set a small width (can be any value)
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent", // Hide the thumb
          },
        }}
      >
        <Table>
          <Thead
            bgColor={"#ed1b24"}
            position={"sticky"}
            top={"0"}
            zIndex={"3"}
            borderRadius={"10px"}
            h={"3rem"}
          >
            <Tr>
              <Th textColor={"white"} fontSize={"sm"}>
                S.No.
              </Th>
              <Th textColor={"white"} fontSize={"sm"}>
                Delivery Post Office
              </Th>
              <Th textColor={"white"} fontSize={"sm"}>
                Post Code
              </Th>
              <Th textColor={"white"} fontSize={"sm"}>
                Account Office
              </Th>
              <Th textColor={"white"} fontSize={"sm"}>
                Province
              </Th>
              <Th textColor={"white"} fontSize={"sm"}>
                Attached Branch
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((item) => (
              <Tr key={item.id}>
                <Td isNumeric>{item.id}</Td>
                <Td>{item.delivery_post_office}</Td>
                <Td isNumeric>{item.post_code}</Td>
                <Td>{item.account_office}</Td>
                <Td>{item.province}</Td>
                <Td isNumeric>{item.code_attached_branch}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
