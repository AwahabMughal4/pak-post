import { Box, Flex } from "@chakra-ui/react";
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

  return (
    <Flex
      w={{ base: "100%", lg: "30%" }}
      flexWrap={"wrap"}
      my={"0.5rem"}
      justifyContent={"space-evenly"}
      alignContent={"space-around"}
    >
      {SideCardsData.map((items) => (
        <Link to={items.link} key={items.id}>
          <Box
            bgColor={"white"}
            h={"130px"}
            w={{ base: "160px", lg: "100px", xl: "130px" }}
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
            p={"0.2rem"}
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
