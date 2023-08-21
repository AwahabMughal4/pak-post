import React from "react";
import image1 from "../assets/AboutUs/timthumb.jpg";
import image2 from "../assets/AboutUs/2023-08-18-shahid-ashraf-tarar-federal-minister-for-communications.jpeg";
import image3 from "../assets/AboutUs/2022-07-15-m-khurram-agha-secretary-sb.jpeg";
import image4 from "../assets/AboutUs/HafizShakilDGJPG.jpg";
import { Text } from "@chakra-ui/react";
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="background-image ">
        <img
          src={image1}
          alt="About us"
          className="object-cover w-[100%] h-[50vh] hover:opacity-70 bg-black transition-opacity duration-300"
        />
      </div>

      <div className="absolute top-[10rem] mt-20 m-auto text-left text-white font-bold text-lg ml-[10rem]">
        <h1 className="text-2xl font-bold inline-block">
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
        <p className="mt-2 text-5xl text-left italic">
          Making every delivery count
        </p>
        <p className="mt-2 text-5xl text-left italic">for people and planet</p>
      </div>

      <div className="history-section my-[3rem] mx-[3rem]">
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
          <p className="History-Text text-lg mt-[2rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
            Pakistan Post office is a state enterprise dedicated to providing
            wide range of postal products and public services. It is the premier
            national postal communication service holding together a vast
            country with a large population. A true emblem of federation, it is
            committed to Serving every one, every day, everywhere.
            <br></br>
            <br></br>
            Pakistan Post Office is one of the oldest government departments in
            the Sub-Continent. After independence from the Great Britain it
            began functioning as the Department of Post & Telegraph.
            <br></br>
            <br></br>
            In 1962 it was separated from the Telegraph & Telephone and was
            launched as an independent attached department of the Ministry of
            Communications. Beginning with 3036 post offices in 1947, it has
            expanded its network to 13419.
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
            Pakistan Post Office consists of a network of 13,419 post offices,
            76 General Post Offices (GPOs), 48 District Mail Offices (DMOs) and
            3 Offices of Exchange, along with central management facilities in
            Islamabad and Lahore. Our purpose is to provide every household and
            business across Pakistan with the ability to communicate and conduct
            business with each other and the world efficiently and economically.
          </p>
        </h1>
      </div>

      <div className="images-container flex m-auto mt-[5rem] flex-col md:flex-row">
        <div className="round-image1 flex-row align-center justify-center ml-[17rem]">
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
        </div>
        <div className="round-image2 flex-row align-center justify-center ml-[17rem]">
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
        </div>
        <div className="round-image3 flex-row align-center justify-center ml-[17rem]">
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
        </div>
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
          <p className="History-Text text-lg mt-[2rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
            Pakistan Post is providing postal services in every nook and corner
            of the country through a network of around 13,000 post offices.
            Pakistan Post is providing delivery services to about 20 million
            households and businesses as community service without any cost
            considerations. In addition to its traditional role, the Pakistan
            Post also performs agency functions on behalf of Federal and
            Provincial governments, which inter-alias include Savings Bank,
            Postal Life Insurance, Collection of Taxes, Collection of
            Electricity, Water, Sui Gas and Telephone bills.
            <br></br>
            <br></br>
            Pakistan Post is also providing a universal postal service network
            in harmony with the Universal Postal Union (UPU) strategy to ensure
            secure and timely delivery of mail, money and material at affordable
            cost through utilization of people, process and technology and
            innovative product offerings.
          </p>
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
          <p className="structure-text text-lg mt-[2rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
            The administrative control of Pakistan Post Office Department at the
            policy planning level is vested in a high powered Management Board
            headed by a Chairperson who is also the Director General of the
            Department and exercises all the operational powers assigned to him
            under the post Office Act, 1898 as amended from time to time.
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
          </p>
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
          <p className="roles-text text-lg mt-[2rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
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
          </p>
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
