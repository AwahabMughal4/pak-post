import React from "react";
import image1 from "../assets/AboutUs/timthumb.jpg";
import image2 from "../assets/AboutUs/2023-08-18-shahid-ashraf-tarar-federal-minister-for-communications.jpeg";
import image3 from "../assets/AboutUs/2022-07-15-m-khurram-agha-secretary-sb.jpeg";
import image4 from "../assets/AboutUs/HafizShakilDGJPG.jpg";
import { Text, Box } from "@chakra-ui/react";
const AboutUs = () => {
  return (
    <div className="hero-image-container">
      <div className="background-image ">
        <img
          src={image1}
          alt="hero"
          className="object-cover w-[100%] h-[60vh]"
        />
      </div>
      <div className="head-text">
        <p className="my-[4.5rem] text-5xl italic text-center text-[#ed1b24] font-serif font-bold">
          "Delivery & Information at lightning Speed."
        </p>
      </div>

      <div className="about-us-section my-[3rem] mx-[3rem] mb-[5rem]">
        <div className=" mt-[5rem]">
          <h1 className="text-2xl inline-block ml-[3rem]">
            <Text
              fontSize={"2xl"}
              fontWeight="bold"
              color={"white"}
              bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
            >
              About Us
            </Text>
          </h1>
          <h1>
            <Text
              className="About-us-Text text-lg mt-[2rem] text-justify"
              mx={{ base: "none", md: "3rem" }}
            >
              <b>Pakistan Post </b>has a broad and varied role to play beyond
              provision of communication link for individuals and businesses. To
              keep pace with the changing communications market, Pakistan Post
              is emphasizing in the use of new communication and information
              technologies to move beyond what is traditionally regarded as a
              its core postal business. Pakistan post is committed to make
              secure and timely delivery of mail, money and material at the
              doorsteps of the customers at affordable cost.
            </Text>
          </h1>
        </div>
      </div>

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        w={"80%"}
        mx={"auto"}
        justifyContent={"space-around"}
      >
        <Box
          className="round-image1 flex-row align-center justify-center "
          w={{ base: "80%", md: "50%", lg: "30%" }}
          my={{ base: "2rem", lg: "0" }}
        >
          <img
            src={image2}
            alt="Rounded Image1"
            className="rounded-full h-52 w-52 object-cover  m-auto"
          />
          <h1 className="minister1 text-center text-[#ed1b24] font-bold">
            {" "}
            Captain R Shahid Ashraf Tarar
          </h1>
          <h1 className="minister1 text-center font-bold">
            Federal Minister for Communications
          </h1>
        </Box>
        <Box
          className="round-image2 flex-row align-center justify-center"
          w={{ base: "80%", md: "50%", lg: "30%" }}
          my={{ base: "2rem", lg: "0" }}
        >
          <img
            src={image3}
            alt="Rounded Image1"
            className="rounded-full h-52 w-52 object-cover  m-auto"
          />
          <h1 className="minister2 text-center text-[#ed1b24] font-bold">
            {" "}
            Capt(Retd) Muhammad Khurram Agha
          </h1>
          <h1 className="minister2 text-center font-bold">
            Secretary Ministry of Communications
          </h1>
        </Box>
        <Box
          className="round-image3 flex-row align-center justify-center"
          w={{ base: "80%", md: "50%", lg: "30%" }}
          my={{ base: "2rem", lg: "0" }}
        >
          <img
            src={image4}
            alt="Rounded Image1"
            className="rounded-full h-52 w-52 object-cover  m-auto"
          />
          <h1 className="minister1 text-center text-[#ed1b24] font-bold">
            {" "}
            Hafiz Shakil Ahmed Qureshi
          </h1>
          <h1 className="minister1 text-center font-bold">
            Chairman/Director General
          </h1>
        </Box>
      </Box>

      <div className="history-section my-[3rem] mx-[3rem] mb-[5rem]">
        <div className="history-heading inline-block ml-[3rem] ">
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
          </Text>
        </div>
        <h1>
          <Text
            className="History-Text text-lg mt-[2rem] text-justify"
            mx={{ base: "none", md: "3rem" }}
          >
            <b>Pakistan Post office </b>is a <i>state enterprise </i>dedicated
            to providing wide range of postal products and public services. It
            is the premier national postal communication service holding
            together a vast country with a large population. A true emblem of
            federation, it is committed to Serving every one, every day,
            everywhere.
            <br></br>
            <br></br>
            Pakistan Post Office is one of the oldest government departments in
            the Sub-Continent. After independence from the{" "}
            <b>
              <i>Great Britain </i>
            </b>
            it began functioning as the{" "}
            <b>
              <i>Department of Post & Telegraph</i>
            </b>
            .<br></br>
            <br></br>
            In 1962 it was separated from the{" "}
            <i>Telegraph & Telephone (T&T) </i>and was launched as an
            independent attached department of the{" "}
            <i>Ministry of Communications</i>. Beginning with 3036 post offices
            in 1947, it has expanded its network to 13419.
            <br></br>
            <br></br>
            It is one of the largest employers in Pakistan having more than
            49,502 employees. Apart from the traditional postal services, it
            boasts a wide range of banking, life insurance and a number of other
            public services.
            <br></br>
            <br></br>
            Pakistan Post Office provides an extensive range of products and
            services to cater for both the personal and business needs of
            various segments of Society. These traditional services constitute
            the core business of Pakistan Post.
            <br></br>
            <br></br>
            Pakistan Post Office consists of a network of{" "}
            <b>13,419 post offices</b>,<b> 76 General Post Offices (GPOs)</b>,{" "}
            <b>48 District Mail Offices (DMOs) </b>and
            <b>3 Offices of Exchange</b>, along with{" "}
            <b>central management facilities </b>in Islamabad and Lahore.{" "}
            <i>
              Our purpose is to provide every household and business across
              Pakistan with the ability to communicate and conduct business with
              each other and the world efficiently and economically.
            </i>
          </Text>
        </h1>
      </div>

      <div className="postal-network-section my-[3rem] mx-[3rem] mt-[5rem]">
        <div className="network-heading inline-block ml-[3rem] ">
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
          </Text>
        </div>
        <h1>
          <Text
            className="History-Text text-lg mt-[2rem] text-justify"
            mx={{ base: "none", md: "3rem" }}
          >
            Pakistan Post is providing postal services in every nook and corner
            of the country through a network of around{" "}
            <b>13,000 post offices</b>. Pakistan Post is providing delivery
            services to about <b>20 million households </b> and businesses as
            community service without any cost considerations. In addition to
            its traditional role, the Pakistan Post also performs{" "}
            <b>
              <i>agency functions </i>
            </b>
            on behalf of Federal and Provincial governments, which inter-alias
            include Savings Bank, Postal Life Insurance, Collection of Taxes,
            Collection of Electricity, Water, Sui Gas and Telephone bills.
            <br></br>
            <br></br>
            Pakistan Post is also providing a <b>universal postal service </b>
            network in harmony with the{" "}
            <b>
              <i>Universal Postal Union (UPU) </i>
            </b>
            strategy to ensure secure and timely delivery of mail, money and
            material at affordable cost through utilization of people, process
            and technology and innovative product offerings.
          </Text>
        </h1>
      </div>

      <div className="structure-and-organization my-[3rem] mx-[3rem] mt-[5rem]">
        <div className="structure-heading inline-block ml-[3rem] ">
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
          </Text>
        </div>
        <h1>
          <Text
            className="structure-text text-lg mt-[2rem] text-justify"
            mx={{ base: "none", md: "3rem" }}
          >
            The administrative control of Pakistan Post Office Department at the
            policy planning level is vested in a high powered Management Board
            headed by a <i>Chairperson </i>who is also the{" "}
            <b>
              <i>Director General </i>
            </b>
            of the Department and exercises all the operational powers assigned
            to him under the{" "}
            <b>
              <i>Post Office Act, 1898 </i>
            </b>
            as amended from time to time.
            <br></br>
            <br></br>
            The Director General chief function is to arrange the establishment
            of postal and allied services in the country, to lay down norms of
            services, to prescribe the work procedures to be followed, to
            establish and maintain postal communications with foreign countries,
            to arrange for the printing of postal, non-postal stamps and postal
            forms, to manage the post office budget and to frame all policy
            directions with regard to postal and allied services, with the
            approval of the Government, where necessary.
          </Text>
        </h1>
      </div>

      <div className="roles-and-services my-[3rem] mx-[3rem] mt-[5rem]">
        <div className="roles-heading inline-block ml-[3rem] ">
          <Text
            fontSize={"2xl"}
            fontWeight="bold"
            color={"white"}
            bgColor={"#ed1b24"}
            p={"2"}
            transform="skewX(-10deg)"
            borderRadius={"none"}
          >
            Assigned Roles, Functions & Services
          </Text>
        </div>
        <h1>
          <Text
            className="roles-text text-lg mt-[2rem] flex justify-center text-justify"
            mx={{ base: "none", md: "3rem" }}
          >
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
            money order services that include Urgent Money Order, Fax Money
            Order and Electronic Money Order.
            <br></br>
            <br></br>
            In a rapidly evolving and increasingly competitive environment and
            in order to meet the challenges of escalating customers
            sophistication, Pakistan Post has also taken giant strides to
            provide to the clientele faster, cost effective and time certain
            delivery system by introducing Express Post services like Urgent
            Mail Service, Express Mail Service, Fax Mail Service, Urgent Money
            Order Services, Fax Money Order Service and Electronic Money Orders
            Service.
          </Text>
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
