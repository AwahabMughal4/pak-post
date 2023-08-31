import React, { useState, useEffect } from "react";
import { Hero_Section_Pics } from "../../DataObjects/data";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prevImage) => (prevImage + 1) % Hero_Section_Pics.length
      );
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>
        <img
          src={Hero_Section_Pics[currentImage].image}
          alt="Hero Section"
          className={`md:h-[350px] h-[200px] w-full transition-opacity duration-500 `}
        />
      </div>
    </div>
  );
};

export default HeroSection;
