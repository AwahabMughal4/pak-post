import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const Footer = () => (
  <div>
    {/* // Main container */}
    <div className="flex justify-evenly bg-gradient-to-b from-zinc-300 to-neutral-200 md:flex-row flex-wrap flex-col ">
      {/* Map div */}
      <div>
        <p className="text-red-700 hover:text-black hover:font-bold font-semibold text-lg shadow-2xl">
          Find
        </p>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13278.459640807303!2d73.0602569!3d33.6930342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfc30f467ee5%3A0xad2e51d473060cf1!2sPakistan%20Post!5e0!3m2!1sen!2s!4v1692255400823!5m2!1sen!2s"
          width="300"
          height="210"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="relative bottom-0 right-2"
        ></iframe>
      </div>

      {/* Quick Links */}
      <div className="md:mt-3">
        <p className="text-red-700 hover:text-black hover:font-bold font-semibold text-lg shadow-2xl">
          Pages
        </p>
        <Link to={"/"} className=" hover:font-semibold md:text-sm ">
          Home
        </Link>
        <br />
        <Link
          to={"/about"}
          className=" hover:font-semibold hover:md:text-md md:text-sm "
        >
          About Us
        </Link>
        <br />
        <Link
          to={"/careers"}
          className=" hover:font-semibold hover:md:text-md md:text-sm "
        >
          Careers
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Official Emails
        </Link>
      </div>
      {/* Pages */}
      <div className="md:mt-3">
        <p className="shadow-2xl text-red-700 hover:text-black hover:font-bold  font-semibold text-lg">
          Quick Links
        </p>
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Rest Houses
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          UMS Envelops
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Active Tenders
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Reg/UnReg Envelops
        </Link>
      </div>
      {/* Support */}
      <div className="md:mt-3">
        <p className="shadow-2xl text-red-700 hover:text-black hover:font-bold  font-semibold text-lg">
          Support
        </p>
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          FAQs
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Privacy
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Help
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Queries & Info
        </Link>
      </div>
      {/* Contact us */}
      <div className="md:mt-3">
        <p className="shadow-2xl text-red-700 hover:text-black hover:font-bold  font-semibold text-lg">
          Contact us
        </p>
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          111-111-117
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Customer Support
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          customercare@pakpost.gov.pk
        </Link>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Director General Pakistan Post Office, G-8/4 Islamabad.
        </Link>
      </div>
    </div>
    {/* relative */}
    <div className="relative bottom-[195px] left-[1465px] bg-white px-1  h-[42] w-8 rounded-md ">
      <FacebookIcon style={{ color: "blue" }} />
      <br />
      <InstagramIcon style={{ color: "FF5722" }} />
      <br />
      <TwitterIcon style={{ color: "0288D1" }} />
    </div>
  </div>
);

export default Footer;

// "use client";

// import {
//   AiFillFacebook,
//   AiFillInstagram,
//   AiFillTwitterSquare,
// } from "react-icons/ai";

// import {
//   Box,
//   Container,
//   HStack,
//   SimpleGrid,
//   Stack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import TopButton from "./HomeSubcomponents/TopButton";

// const Map = () => {
//   return (
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27338.283918751833!2d73.05466999360527!3d33.683011657660686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGPO!5e0!3m2!1sen!2s!4v1692263419795!5m2!1sen!2s"
//       width="300"
//       height="240"
//       title="Map"
//       allowfullscreen=""
//       loading="lazy"
//       referrerpolicy="no-referrer-when-downgrade"
//     ></iframe>
//   );
// };

// const ListHeader = ({ children }) => {
//   return (
//     <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
//       {children}
//     </Text>
//   );
// };

// export default function Footer() {
//   return (
//     <Box
//       bg={useColorModeValue("gray.50", "gray.900")}
//       color={useColorModeValue("gray.700", "gray.200")}
//     >
//       <Container as={Stack} maxW={"6xl"} py={10}>
//         <SimpleGrid
//           templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
//           spacing={8}
//         >
//           <Stack spacing={3}>
//             <ListHeader>Find us</ListHeader>
//             <Box>
//               <Map mt={"50"} color={useColorModeValue("gray.700", "white")} />
//             </Box>
//             <Text fontSize={"sm"}>©2016 to 2023 Pakistan Post Office</Text>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Pages</ListHeader>
//             <Box as="a" href={"#"}>
//               Home
//             </Box>
//             <Box as="a" href={"/aboutUs"}>
//               About us
//             </Box>
//             <Box as="a" href={"/careers"}>
//               Careers
//             </Box>
//             <Box as="a" href={"#"}>
//               Official Emails
//             </Box>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Quick Links</ListHeader>
//             <Box as="a" href={"#"}>
//               Rest Houses
//             </Box>
//             <Box as="a" href={"#"}>
//               UMS Envelopes
//             </Box>
//             <Box as="a" href={"#"}>
//               Reg/UnReg Envelops
//             </Box>
//             <Box as="a" href={"#"}>
//               Active Tenders
//             </Box>
//             <Box as="a" href={"#"}>
//               Delivery Post Office
//             </Box>
//             <Box as="a" href={"#"}>
//               Online Complaints
//             </Box>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Support</ListHeader>
//             <Box as="a" href={"/faqs"}>
//               FAQs
//             </Box>
//             <Box as="a" href={"#"}>
//               Privacy
//             </Box>
//             <Box as="a" href={"#"}>
//               Help
//             </Box>
//             <Box as="a" href={"#"}>
//               Queries & Info
//             </Box>
//           </Stack>
//           <Stack>
//             <ListHeader>Contact us</ListHeader>
//             <Box as="a" href={"#"}>
//               111-111-117
//             </Box>
//             <Box as="a" href={"#"}>
//               Customer Support
//             </Box>
//             <Box as="a" href={"#"}>
//               customercare@pakpost.gov.pk
//             </Box>
//             <HStack justifyContent={"space-between"} mt={5}>
//               <Box as="a" href={"#"}>
//                 <AiFillFacebook size={"40"} color="red" />
//               </Box>
//               <Box as="a" href={"#"}>
//                 <AiFillInstagram size={"40"} color="red" />
//               </Box>
//               <Box as="a" href={"#"}>
//                 <AiFillTwitterSquare size={"40"} color="red" />
//               </Box>
//             </HStack>
//           </Stack>
//         </SimpleGrid>
//       </Container>
//       <Box as="a" href={"#"} position={"absolute"} bottom={"20"} right={"2"}>
//         <TopButton />
//       </Box>
//     </Box>
//   );
// }
