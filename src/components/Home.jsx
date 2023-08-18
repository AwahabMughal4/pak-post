import React from "react";
import { SliderData } from "../DataObjects/SliderData";

import HeroSection from "./HomeSubcomponents/HeroSection";
import Track from "./HomeSubcomponents/Track";
import ServicesSection from "./HomeSubcomponents/ServicesSection";
import NewsSection from "./HomeSubcomponents/NewsSection";
import ImageSlider from "./HomeSubcomponents/ImageSlider";
import ImpLinks from "./HomeSubcomponents/ImpLinks";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Track />
      <ServicesSection />
      <NewsSection />
      <ImageSlider slides={SliderData} />
      <ImpLinks />
    </>
  );
};

export default Home;
