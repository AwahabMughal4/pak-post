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
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

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
          zIndex={"2"}
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
  return (
    <Stack direction={"row"} spacing={{ lg: "1", xl: "4" }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} w={"fit-content"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href ?? "#"}>
                <Box
                  p={{ lg: "1", xl: "2" }}
                  fontSize={{ lg: "md", xl: "lg" }}
                  fontWeight={{ lg: "400", xl: "500" }}
                  className="text-white bg-[color:var(--primary-color)] transition-transform transform hover:scale-105 hover:bg-[color:var(--secondary-color)]"
                >
                  {navItem.label}
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                borderRadius={"none"}
                p={4}
                boxShadow="dark-lg"
                rounded="md"
                w={"fit-content"}
                mt={"0.5rem"}
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
    <Link to={href}>
      <Box
        role={"group"}
        display={"block"}
        fontSize={{ lg: "md", xl: "lg" }}
        fontWeight={{ lg: "400", xl: "500" }}
        className="hover:transform hover:-skew-x-[-10] -skew-x-[-10] text-white hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]"
        p={"0.5rem"}
        border={"1px solid white"}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              // _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
        </Stack>
      </Box>
    </Link>
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
      <Link to={href ?? "#"}>
        <Box
          py={2}
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
      </Link>

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
              <Link to={child.href} key={child.id}>
                <Box py={2}>{child.label}</Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    id: "1",
    label: "Home",
    href: "/",
  },
  {
    id: "2",
    label: "About",
    href: "/about",
  },
  {
    label: "Mail\u00A0Services",
    children: [
      {
        id: "7",
        label: "Domestic\u00A0Mail",
        href: "/domesticservices",
      },
      {
        id: "8",
        label: "International\u00A0Mail",
        href: "/internationalservices",
      },
    ],
  },
  {
    id: "3",
    label: "Express\u00A0Services",
    href: "/expressservices",
  },
  {
    id: "4",
    label: "Track",
    href: "/track",
  },
  {
    id: "5",
    label: "Tariff",
    href: "/tariff",
  },
  {
    id: "6",
    label: "Stamps",
    href: "/stamps",
  },
  {
    id: "7",
    label: "News/Tenders",
    href: "/news",
  },
  {
    id: "8",
    label: "Contact\u00A0Us",
    href: "/contact",
  },
];
