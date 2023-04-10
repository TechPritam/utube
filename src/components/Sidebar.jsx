/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useContext} from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { Context } from "../context/contextApi";

export default function Sidebar(props) {
  const {selectCateg,setSelectCateg,loading,setLoading} = useContext(Context)
  
  console.log(selectCateg)
  
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];
  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];
  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];
  return (
    <div className="w-[223px] bg-[#121212] h-full   overflow-auto pb-8">


      <ul className="flex flex-col  gap-1 border-b-2 justify-center pt-5 items-between ">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li onClick={() => setSelectCateg(name)} key={name} className={`flex flex-row ${selectCateg === name ?"bg-slate-600  text-black":"bg-transparent  text-white"} hover:bg-slate-600 justify-start pl-8 py-3 gap-4 `}>
              <a href="#">{icon}</a>
              <div className={`w-2 `}>{name}</div>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col  gap-1 border-b-2 justify-center pt-5 items-between ">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li onClick={() => setSelectCateg(name)} key={name} className={`flex flex-row ${selectCateg === name ?"bg-slate-600  text-black":"bg-transparent  text-white"} hover:bg-slate-600 justify-start pl-8 py-3 gap-4 `}>
              <a href="#">{icon}</a>
              <div className="">{name}</div>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col  gap-1 border-b-2 justify-center pt-5 items-between ">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li onClick={() => setSelectCateg(name)} key={name} className={`flex flex-row ${selectCateg === name ?"bg-slate-600  text-black":"bg-transparent  text-white"} hover:bg-slate-600 justify-start pl-8 py-3 gap-4 `}>
              <a href="#">{icon}</a>
              <div className="">{name}</div>
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}

// interface PersonProps {
  
//   selectCateg: string;
//   setSelectCateg: string;
//   country: string;
//   // children?: React.ReactNode; // 👈️.. for demo purposes
// }
