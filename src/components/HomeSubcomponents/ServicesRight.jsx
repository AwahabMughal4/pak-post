import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import teamImage from "../../assets/ServicesSectionImages/expressServices.png";
import { Link } from "react-router-dom";

const ServicesRight = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      width="90%"
      minHeight="50vh"
      alignItems="center"
      p={isLargerThan62 ? "16" : "6"}
      m={"auto"}
      marginTop={"10"}
      marginBottom={"10"}
      justifyContent="center"
      flexDirection={isLargerThan62 ? "row" : "column"}
      // shadow={"dark-lg"}
      // borderRadius={"lg"}
    >
      <Flex
        w={isLargerThan62 ? "60%" : "full"}
        flexDirection="column"
        ml={isLargerThan62 ? "7" : "0"}
      >
        <Text
          fontSize={isLargerThan62 ? "5xl" : "4xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"5"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
        >
          Express Services
        </Text>

        <Text
          mb="6"
          mr={"6"}
          mt={"6"}
          opacity="0.8"
          textAlign={"justify"}
          fontWeight={"500"}
        >
          Experience unparalleled speed and reliability with our Express
          services, ensuring your packages reach their destination in record
          time. Choose from a range of expedited shipping options tailored to
          your needs. Trust us for secure and swift deliveries, backed by years
          of post office excellence.
        </Text>

        <Link to={"/expressservices"}>
          <Button
            width="200px"
            size="lg"
            backgroundColor={"#ED1B24"}
            color={"white"}
            marginTop={"1rem"}
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
      </Flex>

      <Spacer />

      <Flex
        w={isLargerThan62 ? "40%" : "full"}
        my={isLargerThan62 ? "0" : "6"}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={teamImage} alt="Chakra Team" w="full" h={"50vh"} />
      </Flex>
    </Flex>
  );
};

export default ServicesRight;
