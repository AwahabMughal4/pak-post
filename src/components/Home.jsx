import React from "react";
import { SliderData } from "../DataObjects/StampsSlider";

import HeroSection from "./HomeSubcomponents/HeroSection";
import TrackSection from "./HomeSubcomponents/TrackSection";
import ServicesSection from "./HomeSubcomponents/ServicesSection";
import NewsSection from "./HomeSubcomponents/NewsSection";
import ImageSlider from "./HomeSubcomponents/ImageSlider";
import ImpLinks from "./HomeSubcomponents/ImpLinks";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrackSection />
      <ServicesSection />
      <NewsSection />
      <ImageSlider slides={SliderData} />
      <ImpLinks />
    </>
  );
};

export default Home;
