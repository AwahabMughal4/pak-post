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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      {/* Menu button for small screens */}
      <IconButton
        display={{ base: "block", lg: "none" }}
        icon={isSidebarOpen ? <FaTimes /> : <FaBars />}
        onClick={toggleSidebar}
        size="lg"
        aria-label="Toggle Sidebar"
        position="sticky"
        top={{ base: "4rem", lg: "6.5rem" }}
        left="1rem"
        zIndex="9999"
        bgColor="rgba(0, 0, 0, 0)"
      />
      <SidebarContent
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        bg={"gray.50"}
        overflow={"auto"}
      />
      <Box
        ml={{
          base: isSidebarOpen ? "0" : "auto",
          sm: "1rem",
        }}
        p="1rem"
        w={{ base: "100%", sm: "100%", lg: "81%" }}
        border="1px"
        shadow="lg"
        borderColor={useColorModeValue("red.200", "gray.700")}
        mx={{ base: "0", sm: "0", lg: "18%" }}
        my={{ base: "0", lg: "-90vh" }}
      >
        <Stampes />
      </Box>
    </div>
  );
}

// The rest of your components and code remain unchanged.

const SidebarContent = ({ isOpen, onClose, ...rest }) => {
  return (
    //main box for buttons
    <Box
      display={{
        base: isOpen ? "block" : "none",
        lg: "block",
      }}
      bg={useColorModeValue("slate.400", "zinc.500")}
      position="Sticky"
      top={"10vh"}
      left={{ base: isOpen ? "0.5rem" : "auto", lg: "0" }}
      zIndex={{ base: "1", lg: "3" }}
      borderRight="1px"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      w={{ base: "100%", lg: "17%" }}
      h={{ base: "90vh", lg: "90vh" }}
      shadow={{ base: "dark-lg", lg: "none" }}
      {...rest}
      mt={{ base: "0", lg: "0" }}
      overflowY={"scroll"}
    >
      {/* sidebar //stamps */}
      <Flex
        h="20"
        alignItems="center"
        justifyContent="center"
        display={{ base: isOpen ? "none" : "flex", lg: "flex" }}
        bg={"gray.100"}
        mb={"1vh"}
        shadow={"lg"}
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

      {/* main button div */}

      <Flex
        mb={{ base: "0", lg: "3rem" }}
        className="flex flex-col-reverse items-center justify-center overflow-y-auto"
      >
        {AllButtons.map((link) => (
          <NavItem
            key={link.year}
            id={link.id}
            toggleSidebar={onClose}
            className="font-semibold border border-red-500"
          >
            {link.year}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

const NavItem = ({ children, toggleSidebar, id, ...rest }) => {
  const handleNavItemClick = () => {
    toggleSidebar();
  };

  //buttons
  return (
    <Box
      as="a"
      href={`#${id}`}
      onClick={handleNavItemClick}
      w={{ base: "calc(50% - 10px)", sm: "40%", lg: "calc(50% - 10px)" }} // 50% width for two buttons with 10px margin between them
      mx={"2px"} // Margin between buttons
      mb={"2px"} // Margin at the bottom of each row
      align="center"
      px={{ base: "2", sm: "2", lg: "2" }}
      py={{ base: "2", sm: "2", lg: "2" }}
      mt={{ base: "1" }}
      borderRadius="lg"
      role="group"
      cursor="pointer"
      bg={"zinc.50"}
      _hover={{
        bg: "#ed1b24",
        color: "red",
        textColor: "white",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

// card

function ProductCard({ heading, paragraph, image, pdfStamps }) {
  return (
    <div className="p-1 m-4 overflow-hidden shadow-lg bg-slate-200 animate_animated animate_bounceIn ">
      <div className="flex-wrap items-center justify-center px-5 py-4  shadow-lg bg-[#f1f5f9] h-[350px] ">
        <img src={image} alt="img1" className="w-[170px] h-[150px] rounded" />

        <div className="w-[180px] h-24   flex-wrap flex ">
          <h2 className="px-1 mt-1 font-sans text-sm font-semibold ">
            {heading}
          </h2>
          <h2 className="px-1 py-1 font-sans text-xs ">{paragraph}</h2>
        </div>
        <div className="flex items-end justify-end ">
          <a href={pdfStamps} className="text-sm font-semibold text-red-600">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}

const Stampes = () => {
  return (
    <div className="flex flex-col-reverse">
      {/* //div for button 2 */}
      <div id="2006" className="">
        <Heading
          textAlign={"center"}
          color={"white"}
          bgColor={"#ed1b24"}
          transform="skewX(-10deg)"
          mt={"2rem"}
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
      </div>
      {/* //div for button 3 */}
      <div id="2007" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2008" className="pt-[8rem] mt-[-8rem]">
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
      </div>
      {/* -----------------------Button 5----------------------- */}
      {/* //b5 */}
      <div id="2009" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2010" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2011" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2012" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2013" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2014" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2015" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2016" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2017" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2018" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2019" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2020" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2021" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2022" className="pt-[8rem] mt-[-8rem]">
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
      <div id="2023" className="pt-[8rem] mt-[-8rem]">
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
  );
};
