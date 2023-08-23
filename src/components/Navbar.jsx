// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [isMailService, setIsmailservice] = useState(false);

//   const handlehoverMail = () => {
//     setIsmailservice(true);
//   };

//   const handlehoverMailEnd = () => {
//     setIsmailservice(false);
//   };
//   return (
//     <div className="py-2 pl-5 ">
//       <div className="flex flex-row space-x-2 items-center justify-between">
//         <Link to={"/"}>
//           <div className="flex flex-row items-center space-x-2">
//             <img
//               src={logo}
//               alt=""
//               className="w-[60px] h-[30px] cursor-pointer"
//             />
//             <h1 className="text-[25px] font-bold italic text-[color:var(--primary-color)]">
//               PAKISTAN POST
//             </h1>
//           </div>
//         </Link>
//         <div className=" ">
//           <ul className=" bg-[color:var(--primary-color)] ml-2 rounded-l-full  flex flex-row h-full">
//             <Link to={"/"}>
//               <li className="px-8 py-2 space-x-5 border-l  hover:transform hover:-skew-x-12 -skew-x-12 h-full text-white font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
//                 Home
//               </li>
//             </Link>
//             <div className="relative">
//               <Link to={"#"}>
//                 <li
//                   className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12 font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]"
//                   onMouseEnter={handlehoverMail}

//                 >
//                   Mail Service
//                 </li>
//               </Link>
//               {isMailService && (
//                 <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md  -skew-x-12" onMouseLeave={handlehoverMailEnd}>
//                   <Link to="/domesticservices" className="block px-4 py-2 text-white font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">Domestic Mail</Link>
//                   <Link to="/internationalservices" className="block px-4 py-2 text-white font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">International Mail</Link>
//                 </div>
//               )}
//             </div>

//             <Link to={"/expressservices"}>
//               <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
//                 Express Service
//               </li>
//             </Link>
//             <Link to={"/stamps"}>
//               <li className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
//                 Stamps
//               </li>
//             </Link>

//             <Link to={"/news"}>
//               <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
//                 News/Tenders
//               </li>
//             </Link>

//             <Link to={"/track"}>
//               <li className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
//                 Track
//               </li>
//             </Link>

//             <Link to={"/about"}>
//               <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
//                 About Us
//               </li>
//             </Link>

//             <Link to={"/contact"}>
//               <li className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12 font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
//                 Contact Us
//               </li>
//             </Link>

//             <Link to={"/tools"}>
//               <li className="px-8 py-2 space-x-5 text-white  hover:transform  ml-1 font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
//                 Quick Tools
//               </li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

("use client");

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../assets/logo.jpg";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", lg: "start" }}
          alignItems={"center"}
        >
          <Image src={logo} w={"3rem"} />
          <Text
            as={"a"}
            variant={"unstyled"}
            href={"/"}
            ml={"1rem"}
            className="text-[25px] font-bold italic text-[color:var(--primary-color)]"
          >
            Pakistan{"\u00A0"}Post
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, lg: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={4}
        >
          <Flex
            display={{ base: "none", lg: "flex" }}
            bgColor={"#ed1b24"}
            ml={"1rem"}
            p={2}
            transform="skewX(-10deg)"
          >
            <DesktopNav />
          </Flex>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={{ lg: "1", xl: "4" }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} w={"fit-content"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={{ lg: "1", xl: "2" }}
                href={navItem.href ?? "#"}
                fontSize={{ lg: "md", xl: "lg" }}
                fontWeight={{ lg: "400", xl: "500" }}
                className="hover:transform hover:-skew-x-12 -skew-x-12 text-white hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]"
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Mail\u00A0Services",
    children: [
      {
        label: "Domestic\u00A0Mail",
        href: "/domesticservices",
      },
      {
        label: "International\u00A0Mail",
        href: "/internationalservices",
      },
    ],
  },
  {
    label: "Express\u00A0Services",
    href: "/expressservices",
  },
  {
    label: "Stamps",
    href: "/stamps",
  },
  {
    label: "News/Tenders",
    href: "/news",
  },
  {
    label: "About\u00A0Us",
    href: "/about",
  },
  {
    label: "Contact\u00A0Us",
    href: "/contact",
  },
  {
    label: "Quick\u00A0Tools",
    href: "/tools",
  },
];
