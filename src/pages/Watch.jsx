import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "../components/SuggestionVideoCard";
import { fetchData } from "../utils/api";
import { abbreviateNumber } from "../utils/constants";
// import { abbreviateNumber } from "js-abbreviation-number";

export default function Watch() {
  const { id } = useParams();
  const { loading, setLoading } = useContext(Context);
  const [relatedVideos, setRelatedVideos] = useState();
  const [playerData, setPlayerData] = useState();

  useEffect(() => {
    if(loading) return
    // fetchVideoPlayerData()
    // fetchVideoRelatedData()
    console.log(playerData);
    console.log(relatedVideos);
  }, [id]);

  const fetchVideoPlayerData = () => {
    console.log("calling api for player");
    setLoading(true);
    fetchData(`video/details/?id=${id}`).then((res) => {
      const { data } = res;
      setPlayerData(data);
      setLoading(false);
    });
  };
  const fetchVideoRelatedData = () => {
    setLoading(true);
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      const { data } = res;
      setRelatedVideos(data);
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col w-full px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {playerData?.title}
          </div>
          <div className="mt-6 flex flex-row justify-between align-center">
            <div className="flex h-full flex-row gap-5 justify-between align-center">
              <div className="w-12 h-12">
                <img
                  src={playerData?.author?.avatar[1]?.url}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-white flex flex-col   line-clamp-2">
                <span className="font-semibold text-sm md:text-xl">
                  {playerData?.author?.title}
                </span>
                <p className="text-white/[0.5]">
                  {playerData?.author?.stats.subscribersText}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-20 rounded-full flex items-center justify-center text-center text-white bg-white/[0.2]">
                  <span className="mb-1 font-semibold">Join</span>
                </div>
                <div className="h-10 w-32 rounded-full flex items-center justify-center text-center text-black bg-white">
                  <span className="mb-1 font-semibold">Subscribe</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-24 rounded-full flex gap-2 items-center justify-center text-center text-white bg-white/[0.2]">
                <div className="text-lg">
                  <AiOutlineLike />
                </div>
                <span className="pb-[2px] font-semibold">
                  {abbreviateNumber(playerData?.stats?.likes)}
                </span>
              </div>
              <div className="h-10 w-36 rounded-full flex gap-2 items-center justify-center text-center text-white bg-white/[0.2]">
                <div className="text-lg">
                  <AiOutlineLike />
                </div>
                <span className="pb-[2px] font-semibold">
                  {abbreviateNumber(playerData?.stats?.views)}views
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto">
        {
          relatedVideos?.contents?.map((item,index)=>{
            return(
              <SuggestionVideoCard key={index} video={item?.video}/>
            )
          })
        }

      </div>
    </div>
  );
}
