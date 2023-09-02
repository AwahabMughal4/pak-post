import {
  Box,
  Button,
  Center,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

import EmailSetting from "../assets/OfficialEmailsPage/EmailManagementDiagram.png";
import Webmail from "../assets/OfficialEmailsPage/Webmail Settings Current.pdf";
import Outlook from "../assets/OfficialEmailsPage/Outlook Settings POP.pdf";

const OfficialEmails = () => {
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
          Email Notice Board
        </Text>
      </Center>
      <Text
        textAlign={"justify"}
        w={"80%"}
        m={"auto"}
        color={"gray.600"}
        fontSize={{ base: "sm", sm: "lg" }}
      >
        <Text my={"1rem"}>
          Welcome to the
          <b>
            <i> Official Pakistan Post Email Account Assistance Page </i>
          </b>
          for users with the domain <b>your.account@pakpost.gov.pk</b>. We are
          here to guide you through the process of shifting/migrating your email
          hosting Internet Service Provider (ISP). If you wish to access your
          previous email box, including your old emails, simply click on
          <b>
            <i> Outlook Settings Previous</i>
          </b>
          . For immediate access to the Pakistan Post webmail, click on
          <b>
            <i> Official Email Link</i>
          </b>
          . If you require information about the current webmail settings, you
          can find them with a single click under
          <b>
            <i> Webmail Settings</i>
          </b>
          . For those looking to configure their Outlook settings to seamlessly
          use our email service, we recommend referring to the comprehensive
          guidelines available at
          <b>
            <i> Outlook Settings POP3</i>
          </b>
          . We are committed to providing you with the best email experience and
          support during this transition.
        </Text>

        <Image src={EmailSetting} w={"70%"} mx={"auto"} my={"1rem"}></Image>

        <div className="my-[1rem]">
          <Text
            fontSize={"2xl"}
            fontWeight="bold"
            color={"white"}
            bgColor={"#ed1b24"}
            p={"3"}
            transform="skewX(-10deg)"
            borderRadius={"none"}
            display={"inline-block"}
            textAlign={"center"}
            my={"3"}
          >
            Official Email Link
          </Text>

          <Text>
            Click{" "}
            <a
              href={"https://mail.pakpost.gov.pk/"}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant={"link"} colorScheme={"red"} size={"lg"}>
                Official Email Link
              </Button>
            </a>{" "}
            to open the official email portal of Pakistan Post.
          </Text>
        </div>
        <div className="my-[1rem]">
          <Text
            fontSize={"2xl"}
            fontWeight="bold"
            color={"white"}
            bgColor={"#ed1b24"}
            p={"3"}
            transform="skewX(-10deg)"
            borderRadius={"none"}
            display={"inline-block"}
            textAlign={"center"}
            my={"3"}
          >
            Webmail Settings
          </Text>

          <Text>
            If you encounter a page displaying the message "Your connection is
            not private" and cannot access your email, please click on{" "}
            <a href={Webmail} target="_blank" rel="noreferrer">
              <Button variant={"link"} colorScheme={"red"} size={"lg"}>
                Webmail Settings
              </Button>
            </a>{" "}
            for assistance and further instructions.
          </Text>
        </div>
        <div className="my-[1rem]">
          <Text
            fontSize={"2xl"}
            fontWeight="bold"
            color={"white"}
            bgColor={"#ed1b24"}
            p={"3"}
            transform="skewX(-10deg)"
            borderRadius={"none"}
            display={"inline-block"}
            textAlign={"center"}
            my={"3"}
          >
            Outlook Settings POP3
          </Text>

          <Text>
            You can find your outlook POP3 settings on a click{" "}
            <a href={Outlook} target="_blank" rel="noreferrer">
              <Button variant={"link"} colorScheme={"red"} size={"lg"}>
                Outlook Settings POP3
              </Button>
            </a>
          </Text>
        </div>
        <div className="my-[1rem]">
          <Text
            fontSize={"2xl"}
            fontWeight="bold"
            color={"white"}
            bgColor={"#ed1b24"}
            p={"3"}
            transform="skewX(-10deg)"
            borderRadius={"none"}
            display={"inline-block"}
            textAlign={"center"}
            my={"3"}
          >
            Password of New Email Box
          </Text>

          <p>
            Our office is here to assist you in gaining access to your new email
            box with a refreshed password. If you encounter any issues related
            to your old password and are unable to retrieve the email containing
            your new password via Outlook, we kindly request you to submit an
            official letter to our office. The official letter should include
            the following table, which serves as a sample for your reference:
          </p>
          <TableContainer
            w={"80%"}
            mx={"auto"}
            my={"2rem"}
            border={"1px solid"}
            borderRadius={"5px"}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize={"md"}>Field</Th>
                  <Th fontSize={"md"}>Information Required</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Full Name</Td>
                  <Td>[Your Full Name]</Td>
                </Tr>
                <Tr>
                  <Td>Email Address</Td>
                  <Td>[Your Email Address - your.account@pakpost.gov.pk]</Td>
                </Tr>
                <Tr>
                  <Td>Employee ID (ifany)</Td>
                  <Td>[Your Employee ID, if applicable]</Td>
                </Tr>
                <Tr>
                  <Td>Cell Number</Td>
                  <Td>[Your Phone Number]</Td>
                </Tr>
                <Tr>
                  <Td>Data of Request</Td>
                  <Td>[Current Date]</Td>
                </Tr>
                <Tr>
                  <Td>Issue Description</Td>
                  <Td>[Briefly Describe Your Issue]</Td>
                </Tr>
                <Tr>
                  <Td>Additional Comments</Td>
                  <Td>[Any Additional Information or Comments]</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text mb={"2rem"}>
            Please ensure that all the required information is accurately filled
            out in your official letter. Our office is committed to providing
            swift and efficient support to address your email-related concerns.
            The new password will be SMS on the given cell number as the
            official email credentials could not be shared with any unauthorized
            person.
          </Text>
        </div>
      </Text>
    </Box>
  );
};

export default OfficialEmails;
