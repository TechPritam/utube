import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    console.log(searchQuery)
    // event.preventDefault()
    if ((event.key === "Enter" || event === "searchButton") && searchQuery.length > 0)
     {
      // alert(searchQuery)
      navigate(`/result/${searchQuery}`);
    }
  };
  return (
    <div className="flex items-center w-full opacity-95 sticky h-full top-0 z-50 justify-between bg-[#212121]">
      <div className="flex items-center p-4 gap-8 ">
        <div>
          <GiHamburgerMenu className="text-3xl" />
        </div>
        <Link to="/watch">
          <div className="flex gap-4 items-center px-2">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-3xl text-white font-medium">uTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="  ">
          <div className="flex h-12 px-4 pr-0 justify-center items-center">
            <div className="flex items-center ">
              <div className="w-10 bg-zinc-900 rounded-l-full flex justify-center">
                <AiOutlineSearch className="h-12 rounded-l text-xl  text-white " />
              </div>
              <input
                placeholder="Search"
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                onKeyUp={searchQueryHandler}
                className="w-96 h-12  border-white bg-zinc-900 focus:outline-none border-none"
              />
              <div className="h-12 flex items-center pr-4 bg-zinc-900">
                <AiOutlineClose className="text-2xl " />
              </div>
            </div>
            <button className="flex justify-center w-10 text-white rounded-r-full bg-zinc-700">
              <AiOutlineSearch
                onClick={() => searchQueryHandler("searchButton")}
                className="h-12  text-xl  "
              />
            </button>
          </div>
        </div>
        <div className="rounded-full p-3 flex justify-center items-center bg-zinc-500">
          <TiMicrophone className="text-xl" />
        </div>
      </div>
      <div className="flex justify-center text-2xl pr-5 gap-5 items-center">
        <BsCameraVideo />
        <div className="flex relative">
          <BsBell />
          <span className="absolute left-3 bottom-2 bg-red-600 text-sm rounded-full px-1 ">
            9+
          </span>
        </div>
        <IoAppsSharp />
      </div>
    </div>
  );
}
