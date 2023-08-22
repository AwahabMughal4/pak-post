import React from "react";
import image1 from "../assets/AboutUs/timthumb.jpg";
import image2 from "../assets/AboutUs/2023-08-18-shahid-ashraf-tarar-federal-minister-for-communications.jpeg";
import image3 from "../assets/AboutUs/2022-07-15-m-khurram-agha-secretary-sb.jpeg";
import image4 from "../assets/AboutUs/HafizShakilDGJPG.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const History = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  return (
    <AccordionItem border={"none"}>
      <AccordionButton
        display="flex"
        w={"10%"}
        alignItems="center"
        justifyContent="space-between"
        py={1}
        px={isLargerThan62 ? "4" : "2"}
        _hover={{ color: "white", transform: "skewX(-10deg)" }}
        _expanded={{
          color: "white",
          transform: "skewX(-10deg)",
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
        >
          History
          <ChevronDownIcon fontSize="24px" />
        </Text>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color="gray.600">
          Pakistan Post office is a state enterprise dedicated to providing wide
          range of postal products and public services. It is the premier
          national postal communication service holding together a vast country
          with a large population. A true emblem of federation, it is committed
          to Serving every one, every day, everywhere.
          <br></br>
          <br></br>
          Pakistan Post Office is one of the oldest government departments in
          the Sub-Continent. After independence from the Great Britain it began
          functioning as the Department of Post & Telegraph.
          <br></br>
          <br></br>
          In 1962 it was separated from the Telegraph & Telephone and was
          launched as an independent attached department of the Ministry of
          Communications. Beginning with 3036 post offices in 1947, it has
          expanded its network to 13419.
          <br></br>
          <br></br>
          It is one of the largest employers in Pakistan having more than 49,502
          employees. Apart from the traditional postal services, it boasts a
          wide range of banking, life insurance and a number of other public
          services.
          <br></br>
          <br></br>
          Pakistan Post Office provides an extensive range of products and
          services to cater for both the personal and business needs of various
          segments of Society. These traditional services constitute the core
          business of Pakistan Post.
          <br></br>
          <br></br>
          Pakistan Post Office consists of a network of 13,419 post offices, 76
          General Post Offices (GPOs), 48 District Mail Offices (DMOs) and 3
          Offices of Exchange, along with central management facilities in
          Islamabad and Lahore. Our purpose is to provide every household and
          business across Pakistan with the ability to communicate and conduct
          business with each other and the world efficiently and economically.
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
const Network = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  return (
    <AccordionItem border={"none"}>
      <AccordionButton
        display="flex"
        w={"20%"}
        alignItems="center"
        justifyContent="space-between"
        py={1}
        px={isLargerThan62 ? "4" : "2"}
        _hover={{ color: "white", transform: "skewX(-10deg)" }}
        _expanded={{
          color: "white",
          transform: "skewX(-10deg)",
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
        >
          Postal Network
          <ChevronDownIcon fontSize="24px" />
        </Text>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color="gray.600">
          Pakistan Post is providing postal services in every nook and corner of
          the country through a network of around 13,000 post offices. Pakistan
          Post is providing delivery services to about 20 million households and
          businesses as community service without any cost considerations. In
          addition to its traditional role, the Pakistan Post also performs
          agency functions on behalf of Federal and Provincial governments,
          which inter-alias include Savings Bank, Postal Life Insurance,
          Collection of Taxes, Collection of Electricity, Water, Sui Gas and
          Telephone bills.
          <br></br>
          <br></br>
          Pakistan Post is also providing a universal postal service network in
          harmony with the Universal Postal Union (UPU) strategy to ensure
          secure and timely delivery of mail, money and material at affordable
          cost through utilization of people, process and technology and
          innovative product offerings.
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
const Structure = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  return (
    <AccordionItem border={"none"}>
      <AccordionButton
        display="flex"
        w={"30%"}
        alignItems="center"
        justifyContent="space-between"
        py={1}
        px={isLargerThan62 ? "4" : "2"}
        _hover={{ color: "white", transform: "skewX(-10deg)" }}
        _expanded={{
          color: "white",
          transform: "skewX(-10deg)",
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
        >
          Structure and Organization
          <ChevronDownIcon fontSize="24px" />
        </Text>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color="gray.600">
          The administrative control of Pakistan Post Office Department at the
          policy planning level is vested in a high powered Management Board
          headed by a Chairperson who is also the Director General of the
          Department and exercises all the operational powers assigned to him
          under the post Office Act, 1898 as amended from time to time.
          <br></br>
          <br></br>
          The Director General chief function is to arrange the establishment of
          postal and allied services in the country, to lay down norms of
          services, to prescribe the work procedures to be followed, to
          establish and maintain postal communications with foreign countries,
          to arrange for the printing of postal, non-postal stamps and postal
          forms, to manage the post office budget and to frame all policy
          directions with regard to postal and allied services, with the
          approval of the Government, where necessary.
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
const Roles = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  return (
    <AccordionItem border={"none"}>
      <AccordionButton
        display="flex"
        w={"10%"}
        alignItems="center"
        justifyContent="space-between"
        py={1}
        px={isLargerThan62 ? "4" : "2"}
        _hover={{ color: "white", transform: "skewX(-10deg)" }}
        _expanded={{
          color: "white",
          transform: "skewX(-10deg)",
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"2"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
        >
          History
          <ChevronDownIcon fontSize="24px" />
        </Text>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color="gray.600">
          The post office in Pakistan has a broad and varied role. It provides
          and important communication link to individuals, communities and
          businesses for
          <br></br>
          <br></br>• Exchange of official, commercial and private letters and
          communications.
          <br></br>
          <br></br>• Transmission of printed matter on subsidized rate to
          disseminate knowledge. Dissemination of knowledge.
          <br></br>
          <br></br>• Transmission of samples of merchandise at lower rates for
          facilitating trade and industry.
          <br></br>
          <br></br>• Money remittances through postal order, postal draft and
          money order services that include Urgent Money Order, Fax Money Order
          and Electronic Money Order.
          <br></br>
          <br></br>
          In a rapidly evolving and increasingly competitive environment and in
          order to meet the challenges of escalating customers sophistication,
          Pakistan Post has also taken giant strides to provide to the clientele
          faster, cost effective and time certain delivery system by introducing
          Express Post services like Urgent Mail Service, Express Mail Service,
          Fax Mail Service, Urgent Money Order Services, Fax Money Order Service
          and Electronic Money Orders Service.
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

const AboutUs = () => {
  return (
    <div className="hero-image-container">
      <div className="background-image ">
        <img
          src={image1}
          alt="hero"
          className="object-cover w-[100%] h-[45vh]"
        />
      </div>
      <div className="head-text">
        <p className="mt-[3rem] text-5xl italic text-center font-serif">
          "Making every delivery count for people and planet"
        </p>
      </div>

      <div className="about-us-section my-[3rem] mx-[3rem]">
        <div className=" mt-[5rem]">
          <h1 className="text-2xl inline-block ml-[3rem]">
            <Text
              fontSize={"3xl"}
              fontWeight="bold"
              color={"white"}
              bgColor={"#ed1b24"}
              p={"2"}
              borderRadius={"none"}
              transform="skewX(-10deg)"
            >
              About Us
            </Text>
          </h1>
          <h1>
            <p className="About-us-Text text-lg mt-[2rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
              Pakistan Post has a broad and varied role to play beyond provision
              of communication link for individuals and businesses. To keep pace
              with the changing communications market, Pakistan Post is
              emphasizing in the use of new communication and information
              technologies to move beyond what is traditionally regarded as a
              its core postal business. Pakistan post is committed to make
              secure and timely delivery of mail, money and material at the
              doorsteps of the customers at affordable cost.
            </p>
          </h1>
        </div>
      </div>

      <div className="images-container flex mt-[5rem] flex-col md:flex-row">
        <div className="round-image1 flex-row align-center justify-center ml-[17rem]">
          <img
            src={image2}
            alt="Rounded Image1"
            className="rounded-full h-52 w-52 object-cover  m-auto"
          />
          <h1 className="minister1 text-center text-[#ed1b24] font-bold mt-[1rem]">
            Capt(Retd) Shahid Ashraf Tarar
          </h1>
          <h1 className="minister1 text-center font-bold">
            Federal Minister for Communications
          </h1>
        </div>

        <div className="round-image2 flex-row align-center justify-center ml-[17rem]">
          <img
            src={image3}
            alt="Rounded Image1"
            className="rounded-full h-52 w-52 object-cover  m-auto"
          />
          <h1 className="minister2 text-center text-[#ed1b24] font-bold mt-[1rem]">
            Capt(Retd) Muhammad Khurram Agha
          </h1>
          <h1 className="minister2 text-center font-bold">
            Secretary Ministry of Communications
          </h1>
        </div>

        <div className="round-image3 flex-row align-center justify-center ml-[17rem]">
          <img
            src={image4}
            alt="Rounded Image1"
            className="rounded-full h-52 w-52 object-cover  m-auto"
          />
          <h1 className="minister1 text-center text-[#ed1b24] font-bold mt-[1rem]">
            Hafiz Shakil Ahmed Qureshi
          </h1>
          <h1 className="minister1 text-center font-bold">
            Chairman/Director General
          </h1>
        </div>
      </div>

      <div className="History-drop flex mt-[5rem] ml-[5rem]">
        <Box w={"90% "}>
          <Accordion
            allowToggle
            width={"100%"}
            minW={"lg"}
            bg={"white"}
            rounded={"lg"}
          >
            <History />
          </Accordion>
        </Box>
      </div>

      <div className="Network-drop flex mt-[5rem] ml-[5rem]">
        <Box w={"90% "}>
          <Accordion
            allowToggle
            width={"100%"}
            minW={"lg"}
            bg={"white"}
            rounded={"lg"}
          >
            <Network />
          </Accordion>
        </Box>
      </div>

      <div className="Structure-drop flex mt-[5rem] ml-[5rem]">
        <Box w={"90% "}>
          <Accordion
            allowToggle
            width={"100%"}
            minW={"lg"}
            bg={"white"}
            rounded={"lg"}
          >
            <Structure />
          </Accordion>
        </Box>
      </div>

      <div className="Roles-drop flex mt-[5rem] ml-[5rem]">
        <Box w={"90% "}>
          <Accordion
            allowToggle
            width={"100%"}
            minW={"lg"}
            bg={"white"}
            rounded={"lg"}
          >
            <Roles />
          </Accordion>
        </Box>
      </div>
    </div>
  );
};

export default AboutUs;
