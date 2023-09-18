import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalculator,
  FaMoneyBill,
  FaNewspaper,
  FaShippingFast,
  FaStamp,
  FaInfoCircle,
} from "react-icons/fa";

const SideCards = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");
  const [isSmallerThan1050] = useMediaQuery("(max-width: 1050px)");

  return (
    <Flex
      w={{ base: "100%", lg: "30%" }}
      h={{ base: "auto", lg: "55vh" }}
      flexWrap={"wrap"}
      alignContent={"space-around"}
      justifyContent={"space-evenly"}
      // position={'absolute'}
      // top={'0'}
      // bottom={'2rem'}
    >
      {SideCardsData.map((items) => (
        <Link to={items.link} key={items.id} className="">
          {/* relative top-3 left-[73rem] my-2 */}
          <Box
            bgColor={"white"}
            h={
              isLargerThan980 && isSmallerThan1050
                ? { base: "90px" }
                : { base: "110px" }
            }
            w={
              isLargerThan980 && isSmallerThan1050
                ? { base: "90px" }
                : { base: "160px", lg: "100px", xl: "130px" }
            }
            borderRadius={"15px"}
            textColor={items.color}
            border={"1px solid"}
            borderColor={items.color}
            boxShadow={`0 4px 6px ${items.color}`}
            fontSize={{ base: "20", lg: "10px", xl: "18px" }}
            fontWeight={"900"}
            textAlign={"center"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            mx={{ base: "auto", lg: "0" }}
            my={{ base: "0.5rem", lg: "0" }}
            style={{
              transition: "transform 0.2s",
              cursor: "pointer",
              transform: hoveredItem === items.id ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredItem(items.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {<items.icon size={30} />} {/* Add icon */}
            {items.name}
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default SideCards;

const SideCardsData = [
  {
    id: 1,
    name: "Calculate Postage",
    link: "/postage",
    color: "#3498db",
    icon: FaCalculator,
  },
  {
    id: 2,
    name: "Tariffs",
    link: "/tariff",
    color: "#e74c3c",
    icon: FaMoneyBill,
  },
  {
    id: 3,
    name: "News & Tenders",
    link: "/news",
    color: "#2ecc71",
    icon: FaNewspaper,
  },
  {
    id: 4,
    name: "Domestic Services",
    link: "/domesticservices",
    color: "#f1c40f",
    icon: FaShippingFast,
  },
  {
    id: 5,
    name: "International Services",
    link: "/internationalservices",
    color: "#9b59b6",
    icon: FaShippingFast,
  },
  {
    id: 6,
    name: "Express Services",
    link: "/expressservices",
    color: "#e67e22",
    icon: FaShippingFast,
  },
  {
    id: 7,
    name: "Stamps",
    link: "/stamps",
    color: "#1abc9c",
    icon: FaStamp,
  },
  {
    id: 8,
    name: "Postal Codes",
    link: "/postcode",
    color: "#d35400",
    icon: FaStamp,
  },
  {
    id: 9,
    name: "Complaints",
    link: "https://ep.gov.pk/complaints.asp",
    color: "#34495e",
    icon: FaInfoCircle,
  },
];
