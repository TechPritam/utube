import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber, formatTime } from "../utils/constants";
export default function Videocard({
  img,
  title,
  videoId,
  authorLogo,
  channel,
  duration,
  views,
  publishedTm,
}) {
 

  return (
    <Link to={`/watch/${videoId}`}>
      <div className="  w-[360px]">
        <div className="relative w-full mb-2">
          <img
            src={img}
            className={
              "h-full  w-full rounded-xl object-cover hover:rounded-none hover:cursor-pointer"
            }
            alt="IMG"
          />
          <div className="duration absolute bottom-2 right-2 text-xs rounded-lg bg-black p-1">
            {formatTime(duration)}
          </div>
        </div>
        <div className="info flex gap-2">
          <div>
            <img
              className="rounded-full object-cover mt-1"
              src={authorLogo}
              alt=""
            />
          </div>
          <div>
            <div className="line-clamp-2 text-md font-bold">{title}</div>
            <div className="author">{channel}</div>
            <div className="flex gap-3 likesNviwes">
              <p>{abbreviateNumber(views)} views</p>
              <p>{publishedTm}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
