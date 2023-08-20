import React from 'react';
import image1 from "../assets/StampsCarouselImages/2022-08-15-Stamp-Diamond-Jubilee-Of-Pakistan-1947-2022-Commemorative-Postage-Stamp-August-14-2022.jpg"
import { Text } from '@chakra-ui/react';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className='background-image'>
        <img src={image1} alt="About us" className="object-cover w-[100%] opacity-70 h-[50vh]" />
      </div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
        <h1 className="text-2xl font-bold">
          <Text
            fontSize={"3xl"}
            fontWeight="bold"
            color={"white"}
            bgColor={"#ed1b24"}
            p={"2"}
            borderRadius={"none"}
            transform="skewX(-10deg)"
          >
            About Us
          </Text>
        </h1>
        <p className="mt-4 text-lg">
        Pakistan Post office is a state enterprise dedicated to providing wide range of postal products and public services. It is the premier national postal communication service holding together a vast country with a large population. A true emblem of federation, it is committed to Serving every one, every day, everywhere.

Pakistan Post Office is one of the oldest government departments in the Sub-Continent. After independence from the Great Britain it began functioning as the Department of Post & Telegraph.

In 1962 it was separated from the Telegraph & Telephone and was launched as an independent attached department of the Ministry of Communications. Beginning with 3036 post offices in 1947, it has expanded its network to 13419.

It is one of the largest employers in Pakistan having more than 49,502 employees. Apart from the traditional postal services, it boasts a wide range of banking, life insurance and a number of other public services.

        </p>
      </div>
      <div className="history-section">
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"1"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
        >
          History
        </Text>
      </div>
      <div className="images-container">
        <div className="round-image">
          {/* Image 1 */}
        </div>
        <div className="round-image">
          {/* Image 2 */}
        </div>
        <div className="round-image">
          {/* Image 3 */}
        </div>
      </div>
      <div className="postal-network-section">
        {/* Postal network section content */}
      </div>
    </div>
  );
};

export default AboutUs;
