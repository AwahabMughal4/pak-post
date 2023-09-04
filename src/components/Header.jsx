import React from "react";
// import LanguageIcon from "@mui/icons-material/Language";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="flex flex-row">
        <div className="flex flex-row w-full mr-7 items-center justify-end space-x-3 ">
          {/* <div className="flex flex-row  text-black pt-1   items-end">
            <div className="flex flex-row space-x-1 items-center cursor-pointer hover:scale-105 transform transition-all px-2">
              <LanguageIcon />
              <h1 className="text-[13px]">Language</h1>
            </div>
          </div> */}
          <div className="flex flex-row  text-black pt-1 items-end ">
            <div className="flex flex-row space-x-1 items-center cursor-pointer hover:scale-105 transform transition-all px-2">
              <HeadsetMicIcon />
              <Link to={"/complaints"}>
                <h1 className="text-[13px]">Support</h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-row pr-4 text-black pt-1 items-end ">
            <div className="flex flex-row space-x-1 items-center cursor-pointer hover:scale-105 transform transition-all px-2">
              <LocationOnIcon />
              <Link to={"/locate"}>
                {" "}
                <h1 className="text-[13px]">Locate </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
