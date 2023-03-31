/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
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

export default function Sidebar() {
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
    <div className="w-2/12 bg-[#121212] h-full   overflow-auto pb-8">


      <ul className="flex flex-col  gap-1 border-b-2 justify-center py-5 items-between ">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="flex flex-row justify-start hover:bg-slate-600 pl-16 py-3 gap-4 ">
              <a href="#">{icon}</a>
              <div className="w-2">{name}</div>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col  gap-1 border-b-2 justify-center py-5 items-between ">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="flex flex-row justify-start rounded-lg hover:bg-slate-600 pl-16 py-3 gap-4 ">
              <a href="#">{icon}</a>
              <div className="">{name}</div>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col  gap-1 border-b-2 justify-center py-5 items-between ">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="flex flex-row justify-start hover:bg-slate-600 pl-16 py-3 gap-4 ">
              <a href="#">{icon}</a>
              <div className="">{name}</div>
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}
