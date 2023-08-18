import React, { useState } from "react";
import { SliderData } from "../../DataObjects/SliderData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Center, Heading } from "@chakra-ui/react";

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
          m={"auto"}
          display={"inline-block"}
          borderBottom={"2px solid red"}
          p={"2"}
        >
          Historic Stamps
        </Heading>
      </Center>
      <section className="slider">
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
                      <button className="read-more-button">Read More</button>
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
