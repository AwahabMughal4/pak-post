import React from "react";
import { SliderData } from "../DataObjects/StampsSlider";

import HeroSection from "./HomeSubcomponents/HeroSection";
import NewsSection from "./HomeSubcomponents/NewsSection";
import ImageSlider from "./HomeSubcomponents/ImageSlider";
import ImpLinks from "./HomeSubcomponents/ImpLinks";
import SideCards from "./HomeSubcomponents/SideCards";
import { Flex } from "@chakra-ui/react";
import IntroSection from "./HomeSubcomponents/IntroSection";

const Home = () => {
  return (
    <>
      <Flex flexDir={{ base: "column", lg: "row" }}>
        <HeroSection />
        <SideCards />
      </Flex>
      <IntroSection />
      <NewsSection />
      <ImageSlider slides={SliderData} />
      <ImpLinks />
    </>
  );
};

export default Home;
