import React, { useState, useEffect } from "react";
import { Hero_Section_Pics } from "../../DataObjects/data";
import { Box } from "@chakra-ui/react";
import Track from "./TrackComponent";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImage(
          (prevImage) => (prevImage + 1) % Hero_Section_Pics.length
        );
      }
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderDots = () => {
    return Hero_Section_Pics.map((_, index) => (
      <span
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`w-2 h-2 mx-2 rounded-full cursor-pointer bg-white 0 hover:bg-red-500`}
      ></span>
    ));
  };

  return (
    <Box
      w={{ base: "100%", lg: "70%" }}
      ml={{ base: "0", lg: "0.5rem" }}
      mt={"1rem"}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <img
          src={Hero_Section_Pics[currentImage].image}
          alt="Hero Section"
          className="h-[50vh] w-full transition-opacity duration-500"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {renderDots()}
        </div>
      </div>
      <Box mt={"1rem"} p={{ base: "1rem", lg: "0.3rem" }}>
        <Track />
      </Box>
    </Box>
  );
};

export default HeroSection;
