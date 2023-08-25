import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import TopButton from "./HomeSubcomponents/TopButton";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";

import React from "react";

const Footer = () => (
  <Box
    bg={useColorModeValue("gray.50", "gray.900")}
    color={useColorModeValue("gray.700", "gray.200")}
    borderTop={"2px solid #ed1b24"}
  >
    <div className="flex justify-evenly  md:flex-row flex-wrap flex-col">
      {/* Map div */}
      <div className="m-[1rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27338.283918751833!2d73.05466999360527!3d33.683011657660686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGPO!5e0!3m2!1sen!2s!4v1692263419795!5m2!1sen!2s"
          width="300"
          height="240"
          title="Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative bottom-0 right-2"
        ></iframe>
      </div>

      {/* Quick Links */}
      <div className="md:my-3 sm:my-6">
        <p className="text-[#ed1b24] font-semibold text-lg shadow-2xl">Pages</p>
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
          Career
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
      <div className="md:my-3 sm:my-6">
        <p className="shadow-2xl text-[#ed1b24] font-semibold text-lg">
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
      <div className="md:my-3 sm:my-6">
        <p className="shadow-2xl text-[#ed1b24] font-semibold text-lg">
          Support
        </p>
        <Link
          to={"/faqs"}
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
          to={"/complaints"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Queries & Info
        </Link>
      </div>
      {/* Contact us */}
      <div className="md:my-3 sm:my-6">
        <p className="shadow-2xl text-[#ed1b24] font-semibold text-lg">
          Contact us
        </p>
        <a
          href="tel:111-111-117"
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          111-111-117
        </a>
        <br />
        <Link
          to={"/"}
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Customer Support
        </Link>
        <br />
        <a
          href="mailto:customercare@pakpost.gov.pk"
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          customercare@pakpost.gov.pk
        </a>
        <br />
        <a
          href="/"
          className=" hover:font-semibold hover:md:text-md md:text-sm"
        >
          Director General Pakistan Post Office, G-8/4 Islamabad.
        </a>
      </div>
      <VStack
        justifyContent={"space-between"}
        mt={5}
        position="absolute"
        bottom="80px"
        right={["16px", "84px"]}
      >
        <Box as="a" href={"https://www.facebook.com/PakistanPostOffice.PK"}>
          <AiFillFacebook size={"40"} color="red" />
        </Box>
        <Box as="a" href={"https://www.instagram.com/pakistan.post/"}>
          <AiFillInstagram size={"40"} color="red" />
        </Box>
        <Box as="a" href={"https://twitter.com/PakPostOffice"}>
          <AiFillTwitterSquare size={"40"} color="red" />
        </Box>
      </VStack>
      <Box as="a" href={"#"}>
        <TopButton />
      </Box>
    </div>
  </Box>
);

export default Footer;
