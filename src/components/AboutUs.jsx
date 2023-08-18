import React from 'react';
import image1 from "../assets/StampsCarouselImages/2022-08-15-Stamp-Diamond-Jubilee-Of-Pakistan-1947-2022-Commemorative-Postage-Stamp-August-14-2022.jpg"
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="background-image" >
        <img src={image1}/>
      </div>
      <div className="history-section">
        {/* History section content */}
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
