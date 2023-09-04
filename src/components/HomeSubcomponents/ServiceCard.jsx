import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
const ServiceCard = (props) => {
  const openPdfInNewWindow = () => {
    window.open(props.pdfPath, "_blank");
  };
  return (
    <div className="md:w-[40%] xl:w-[23%] lg:w-[23%] md:h-[70%] mx-2">
      <Card maxW="sm" className="w-full h-[400px] justify-center m-3">
        <CardBody>
          <Image
            src={props.icon}
            borderRadius="none"
            className="md:w-[50%] md:h-[50%] w-[40%] h-[40%] border-2 border-red-800 justify-center items-center object-contain align-middle ml-[3rem]"
            aspectRatio={3 / 2}
          />
          <Stack mt="4" spacing="3" >
            <Heading size="md">{props.heading}</Heading>
            <Text>{props.description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={openPdfInNewWindow}
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceCard;
