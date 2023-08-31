import React from "react";
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

const Track = () => {
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
              css={{
                "&:hover": {
                  backgroundColor: "#ca242d",
                },
              }}
            >
              Track
            </Button>
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
        <Link to={"/locateus"}>
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
        <Link to={"/postcode"}>
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

export default Track;
