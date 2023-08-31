import React from "react";
import image1 from "../assets/AboutUs/timthumb.jpg";
import { Text } from "@chakra-ui/react";
const Privacy = () => {
  return (
    <div>
      <div className="background-image ">
        <img
          src={image1}
          alt="hero"
          className="object-cover w-[100%] h-[45vh]"
        />
      </div>
      <div className="head-text">
        <p className="mt-[3rem] text-4xl italic text-center text-[#ed1b24] font-serif font-bold">
          "Privacy is not an option, and it should'nt be the price we accept for
          just getting on the Internet"
        </p>
      </div>
      <div className="privacy-section my-[3rem] mx-[3rem] mb-[5rem]">
        <div className=" mt-[5rem]">
          <h1 className="text-2xl  ml-[3rem]">
            <Text
              ml={"5rem"}
              mr={"5rem"}
              fontSize={"4xl"}
              fontWeight="bold"
              color={"white"}
              bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              textAlign={"center"}
            >
              Privacy
            </Text>
          </h1>
          <h1>
            <p className="Privacy-Text text-lg mt-[5rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
              Any person accessing this site agrees to the following:
              <br></br>
              <br></br>
              Material on this site is the copyrighted property of the Pakistan
              Post Office (PPO). All rights reserved. The information and images
              presented here may not under any circumstances be reproduced or
              used without prior written permission. Users may view and download
              material from this site only for personal, non-commercial home
              use. To reproduce, republish, upload, post, transmit, distribute
              or publicly display material from this website you will need
              written permission from the PPO.
              <br></br>
              <br></br>
              Users agree not to use the site for sale, trade or other
              commercial purposes. Users may not use language that is
              threatening, abusive, vulgar, discourteous or criminal. Users also
              may not post or transmit information or materials that would
              violate rights of any third party or which contains a virus or
              other harmful component. PPO reserves the right to remove or edit
              any messages or material submitted by users. By communicating with
              PPO, however, users grant PPO permission to use any information,
              suggestions, ideas, drawings or concepts communicated for any
              purpose PPO chooses, commercial, public or otherwise, without
              compensation whatsoever.
              <br></br>
              <br></br>
              The materials in this site are provided "as is" and without
              warranties of any kind either express or implied. To the fullest
              extent permissible pursuant to applicable law, PPO disclaims all
              warranties, express or implied, including, but not limited to,
              implied warranties of merchantability and fitness for a particular
              purpose. PPO does not warrant or represent that the information is
              accurate or reliable or that the site will be free of errors or
              viruses.
              <br></br>
              <br></br>
              Under no circumstances, including but not limited to negligence,
              will PPO be liable for special or consequential damages that
              result from the use or inability to use the materials in this
              site. In no event shall PPO's liability to a user for any loss,
              damage or claim exceed the amount paid by the user for accessing
              this site.
              <br></br>
              <br></br>
              This agreement is effective until terminated by either party. You
              may terminate this agreement at any time by discontinuing your use
              of PPO site and destroying all materials obtained from it.
              <br></br>
              <br></br>
            </p>
          </h1>
        </div>
      </div>
      <div className="privacy-section my-[3rem] mx-[3rem] mb-[5rem]">
        <div className=" mt-[5rem]">
          <h1 className="text-2xl  ml-[3rem]">
            <Text
              ml={"5rem"}
              mr={"5rem"}
              fontSize={"4xl"}
              fontWeight="bold"
              color={"white"}
              bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              textAlign={"center"}
            >
              Note
            </Text>
          </h1>
          <h1>
            <p className="Note-Text text-lg mt-[5rem] ml-[3rem] mr-[3rem] flex justify-center text-allign font-bold">
              Pakistan Post Office (PPO), Pakistan Post Foundation (PPF),
              General Post Office (GPO), Post Office (PO), Express Post Center
              (EPC), Express Post Services (EPS), Express Mail Services (EMS),
              Express Financial Services (EFS), , Fax Mail (FM), Fax Money Order
              (FMO), Urgent Money Order (UMO) and Urgent Mail Services (UMS) are
              registered trademarks of Pakistan Post Office. The list is not
              intended to be exhaustive.
            </p>
          </h1>
        </div>
      </div>
      <div className="privacy-section my-[3rem] mx-[3rem] mb-[10rem]">
        <div className=" mt-[5rem]">
          <h1 className="text-2xl ml-[3rem]">
            <Text
              ml={"5rem"}
              mr={"5rem"}
              fontSize={"4xl"}
              fontWeight="bold"
              color={"white"}
              bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              textAlign={"center"}
            >
              Disclamer
            </Text>
          </h1>
          <h1>
            <p className="Disclamer-Text text-lg mt-[2rem] ml-[3rem] mr-[3rem] flex justify-center text-allign">
              The contents provided in this website are only for information
              purpose. Pakistan Post Office Department accepts no responsibility
              for errors and omissions caused as a result of their transmission
              via the Internet or their downloading or printing by user. Post
              Office reserves the right to add, modify, update and delete the
              contents of any of the pages published at this site.
              <br></br>
              <br></br>
              The site visitor agrees not to alter the presentation, reproduce,
              retransmit, disseminate, sell, distribute, publish, broadcast,
              circulate or commercially exploit the information in any manner
              without the express written consent of the Pakistan Post Office;
              nor to use the Information for any unlawful purpose. The site
              visitor must access the information manually by request and not
              programmatically by macro or other automated means. Pakistan Post
              Office may point to other sites that may of be of interest to the
              site visitor but for which Pakistan Post Office has no
              responsibility and only provides this as a service to the site
              visitor. All rates quoted on the web site are in Pakistani Rupees.
              Enclosure of currency notes or precious metals are forbidden in
              letter mail. Pakistan Post would not be responsible for loss.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
