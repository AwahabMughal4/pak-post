import React, { useState } from "react";
import { SliderData } from "../../DataObjects/StampsSlider";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <Center>
        <Heading
          m={{ base: "1rem", sm: "2rem" }}
          mb={{ base: "5rem", sm: "5rem" }}
          display={"inline-block"}
          borderBottom={"2px solid red"}
          p={2}
        >
          Historic Stamps
        </Heading>
      </Center>
      <section className="slider w-[100%]">
        <div className="slider-content">
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={slide.image} alt="travel" className="image" />
                    </div>
                    <div className="text-container">
                      <p className="image-heading">{slide.heading}</p>
                      <p className="image-description">{slide.description}</p>
                      <Link to={"/stamps"}>
                        <button className="read-more-button skew-x-[-10deg]">
                          Read More
                        </button>
                      </Link>
                    </div>
                    <div className="arrows">
                      <IoIosArrowForward
                        className="left-arrow"
                        onClick={nextSlide}
                      />
                      <IoIosArrowBack
                        className="right-arrow"
                        onClick={prevSlide}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageSlider;
