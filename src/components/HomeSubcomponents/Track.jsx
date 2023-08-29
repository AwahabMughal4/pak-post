import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const soapRequest = `
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <TrackArticle xmlns="http://tempuri.org/">
      <ArticleId>${"UMS64043764"}</ArticleId>
      <ResType>"android"</ResType>
    </TrackArticle>
  </soap:Body>
</soap:Envelope>
`;

fetch("https://emtts.dakkhana.com.pk/MobileAppSOAP/EPTracklive.asmx", {
  method: "POST",
  headers: {
    "Content-Type": "text/xml; charset=utf-8",
    SOAPAction: "http://tempuri.org/TrackArticle",
  },
  body: soapRequest,
})
  .then((response) => response.text())
  .then((data) => {
    // Parse the XML data returned in the response
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const Track = () => {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);

  const handleTrackClick = async () => {
    try {
      const response = await fetch(`YOUR_API_ENDPOINT/${trackingId}`);
      const data = await response.json();
      setResult(data); // Update the state with the API response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <VStack my={"1.3rem"} p={"1rem"}>
      <Stack w={"100%"}>
        <FormControl
          w={{ base: "100%", sm: "70%" }}
          m={"auto"}
          p={"auto"}
          mt={"0"}
        >
          <HStack>
            <Input
              type="text"
              borderColor={"black.200"}
              focusBorderColor="#ED1B24"
              transform="skewX(-10deg)"
              borderRadius={"none"}
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter your tracking id"
              h={{ base: "35px", sm: "50px" }}
            />
            <Button
              backgroundColor={"#ED1B24"}
              color={"white"}
              p={{ base: "1", sm: "2" }}
              fontSize={{ base: "xl", sm: "3xl" }}
              fontWeight={{ base: "400", sm: "600" }}
              h={{ base: "35px", sm: "50px" }}
              w={"100px"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              onClick={handleTrackClick}
              css={{
                "&:hover": {
                  backgroundColor: "#ca242d",
                },
              }}
            >
              Track
            </Button>
            {result && <div>{/* Display the result data here */}</div>}
          </HStack>
          <FormLabel mt={"10px"} mb={"20px"} fontWeight={"bold"}>
            Search or Track Packages
          </FormLabel>
        </FormControl>
      </Stack>

      <HStack
        w={"100%"}
        p={"1rem"}
        justifyContent={"center"}
        flexWrap={{ base: "wrap", sm: "nowrap" }}
      >
        <Link to={"/postage"}>
          <Heading
            p={{ base: "1", sm: "2" }}
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight={{ base: "400", sm: "600" }}
            borderRadius={"none"}
            transition={"all 0.3s"}
            bgColor={"#ed1b24"}
            color={"White"}
            transform="skewX(-10deg)"
            css={{
              "&:hover": {
                transform: "scaleZ(1.1)",
              },
            }}
          >
            Calculate{"\u00A0"}Postage
          </Heading>
        </Link>
        <Link to={"/locate"}>
          <Heading
            p={{ base: "1", sm: "2" }}
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight={{ base: "400", sm: "600" }}
            borderRadius={"none"}
            transition={"all 0.3s"}
            bgColor={"#ed1b24"}
            color={"White"}
            transform="skewX(-10deg)"
            css={{
              "&:hover": {
                transform: "scaleZ(1.1)",
              },
            }}
          >
            Locate{"\u00A0"}Us
          </Heading>
        </Link>
        <Link to={"/post-code"}>
          <Heading
            p={{ base: "1", sm: "2" }}
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight={{ base: "400", sm: "600" }}
            borderRadius={"none"}
            transition={"all 0.3s"}
            bgColor={"#ed1b24"}
            color={"White"}
            transform="skewX(-10deg)"
            css={{
              "&:hover": {
                transform: "scaleZ(1.1)",
              },
            }}
          >
            Find{"\u00A0"}Postal{"\u00A0"}Code
          </Heading>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Track();
