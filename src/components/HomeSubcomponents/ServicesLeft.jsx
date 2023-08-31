import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import teamImage from "../../assets/ServicesSectionImages/mailServices.png";

const ServicesLeft = () => {
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
        w={isLargerThan62 ? "40%" : "full"}
        mb={isLargerThan62 ? "0" : "6"}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={teamImage} alt="Chakra Team" w="full" />
      </Flex>

      <Spacer />

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
          borderRadius={"none"}
          transform="skewX(-10deg)"
        >
          Mail Services
        </Text>

        <Text
          mb="6"
          mr={"6"}
          mt={"6"}
          opacity="0.8"
          textAlign={"justify"}
          fontWeight={"500"}
        >
          Experience efficient and reliable mail services for all your sending
          needs, from letters to packages, with our wide range of shipping
          options. Our dedicated team ensures secure handling and timely
          delivery, both domestically and internationally, backed by our trusted
          postal network. Whether it's express delivery, tracking services, or
          cost-effective shipping solutions, we have the right mail service to
          suit your requirements.
        </Text>

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
      </Flex>
    </Flex>
  );
};

export default ServicesLeft;
