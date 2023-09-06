"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AllButtons,
  Buttonb,
  Buttonc,
  Buttond,
  Buttone,
  Buttonf,
  Buttong,
  Buttonh,
  Buttoni,
  Buttonj,
  Buttonk,
  Buttonl,
  Buttonm,
  ButtonN,
  Buttonn,
  Buttono,
  Buttonp,
  Buttonq,
  Buttonr,
} from "../DataObjects/stamps_data";

export default function Stamps() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex overflow-y-auto h-[130vh]">
      {/* Menu button for small screens */}
      <IconButton
        display={{ base: "block", md: "none" }}
        icon={isSidebarOpen ? <FaTimes /> : <FaBars />}
        onClick={toggleSidebar}
        size="lg"
        aria-label="Toggle Sidebar"
        position="fixed"
        top="1rem"
        left="1rem"
        zIndex="9999"
        bgColor="transparent"
        color={useColorModeValue("gray.600", "gray.400")}
      />
      <SidebarContent
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Box
        ml={{ base: isSidebarOpen ? "0" : "auto", md: "20%" }}
        p="1rem"
        w={{ base: "100%", md: "80%" }}
        border="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}

        h="full"
      >
        <Contacts />
      </Box>

      {/* Sidebar for screens larger than 'md' */}
    </div>
  );
}

const SidebarContent = ({ isOpen, onClose, ...rest }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      bg={useColorModeValue("white", "zinc.500")}
      position={"absolute "}
      zIndex={"3"}
      borderRight="1px"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "60%", md: "18%" }}
      h={{ base: "65rem", md: "auto" }}
      shadow={{ base: "dark-lg", md: "none" }}
      {...rest}
      mx={'2'}

      // bg={'zinc.200'}
      

    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="center" 
          >
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          borderBottom={"2px solid #ed1b24"}

        >
          Stamps
        </Text>
      </Flex>
      {AllButtons.map((link) => (
        <NavItem key={link.year} id={link.id} toggleSidebar={onClose}>
          {link.year}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ children,toggleSidebar, id, ...rest }) => {
  const handleNavItemClick = () => {
    toggleSidebar();
  };

  return (
    <Box
      as="a"
      href={`#${id}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      display={"flex "}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={handleNavItemClick}
      // bg={'gray.100'}      
    >
      <Flex
        align="center"
      px={'7'}
      py={'2'}
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#ed1b24",
          color: "red",
          textColor:'white',
        }}
        
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  );
};

function ProductCard({ heading, paragraph, image,pdfStamps }) {
  return (
    <div className="p-1 m-4 border border-gray-300 shadow-lg bg-zinc-200 ">
      <div className="flex-wrap items-center justify-center px-5 py-4 border border-gray-300 shadow-lg bg-stone-200 h-[350px] ">
        <img src={image} alt="img1" className="w-[160px] h-[140px] rounded" />

        <div className="w-[180px] h-24   flex-wrap flex ">
          <h2 className="px-1 mt-1  font-sans text-sm font-semibold ">
            {heading}
          </h2>
          <h2 className="px-1 py-1 font-sans text-xs ">{paragraph}</h2>
          
        </div>
        <div className=" flex justify-end items-end">
          <a href={pdfStamps} className= "text-red-600  font-semibold  text-sm">Read...</a>
          </div>
      </div>
    </div>
  );
}

const Contacts = () => {
  return (
    <div>
      {/* //div for button 2 */}
      <div id="b2">
        <Heading
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"1rem"}
        >
          2006
        </Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          {Buttonb.map((item) => (
            <ProductCard
              heading={item.heading}
              paragraph={item.paragraph}
              image={item.image}
            />
          ))}
        </Flex>
        {/* //div for button 3 */}
        <div id="b3">
          <Heading
            textAlign={"center"}
            color={"white"}
            bgColor={"#ed1b24"}
            transform="skewX(-10deg)"
            mt={"1rem"}
          >
            2007
          </Heading>

          <Flex flexWrap={"wrap"} justifyContent={"center"}>
            {Buttonc.map((item) => (
              <ProductCard
                heading={item.heading}
                paragraph={item.paragraph}
                image={item.image}
              />
            ))}
          </Flex>
        </div>
        {/* //div for button 4 */}
        <div id="b4">
          <Heading
            textAlign={"center"}
            color={"white"}
            bgColor={"#ed1b24"}
            transform="skewX(-10deg)"
            mt={"1rem"}
          >
            2008
          </Heading>
          <Flex flexWrap={"wrap"} justifyContent={"center"}>
            {Buttond.map((item) => (
              <ProductCard
                heading={item.heading}
                paragraph={item.paragraph}
                image={item.image}
              />
            ))}
          </Flex>
          <div />
          {/* -----------------------Button 5----------------------- */}
          {/* //b5 */}
          <div id="b5">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2009
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttone.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 6 */}
          <div id="b6">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2010
            </Heading>
            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonf.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 7 */}
          <div id="b7">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2011
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttong.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 8 */}
          <div id="b8">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2012
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonh.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* -----------------------b9------------------------------------ */}
          <div id="b9">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2013
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttoni.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 10 */}
          <div id="b10">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2014
            </Heading>
            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonj.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 11 */}
          <div id="b11">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2015
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonk.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 12 */}
          <div id="b12">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2016
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonl.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* ------------------------------------------------------- */}
          {/* ===================2017========================= */}
          <div id="b13">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2017
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonm.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* ===================2018========================= */}
          <div id="b14">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2018
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {ButtonN.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* -----------------------2019------------------------------------ */}
          <div id="b15">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2019
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonn.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 2020 */}
          <div id="b16">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2020
            </Heading>
            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttono.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 2021 */}
          <div id="b17">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2021
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonp.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 2022 */}
          <div id="b18">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2022
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonq.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
          {/* //div for button 2022 */}
          <div id="b19">
            <Heading
              
              textAlign={"center"}
              color={"white"}
              bgColor={"#ed1b24"}
              transform="skewX(-10deg)"
              mt={"1rem"}
            >
              2023
            </Heading>

            <Flex flexWrap={"wrap"} justifyContent={"center"}>
              {Buttonr.map((item) => (
                <ProductCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  image={item.image}
                />
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};
