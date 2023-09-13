import React from "react";
import { Button } from "@chakra-ui/react";

const BackButton = () => {
  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous page
  };
  return (
    <Button
      display={{ base: "none", md: "block" }}
      onClick={handleGoBack}
      position="absolute"
      top="6rem"
      right="1rem"
      bgColor={"#ed1b24"}
      color={"white"}
      _hover={{
        bgColor: "#c51017",
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
