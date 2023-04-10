import React, { useContext } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Videocard from "../components/Videocard.jsx";
import { Context } from "../context/contextApi";

export default function Home() {
  const { loading, searchResults } = useContext(Context);
  const videos = searchResults?.data?.contents;
  console.log(searchResults);
  // setSelectCateg("pritam")

  return (
    <div className="max-h-screen  overflow-hidden ">
      

      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div className="flex-1 grid w-full gap-y-14 gap-x-8 grid-cols-4 overflow-y-auto p-6">
          {!loading && videos?.length ? (
            videos.map((video) => {
              if(video?.type != "video") return false
              return (
                <Videocard
                  video={video}
                  videoId={video?.video?.videoId}
                  img={video?.video?.thumbnails?.[0].url}
                  title={video?.video?.title}
                  channel={video?.video?.author?.title}
                  authorLogo={video?.video?.author?.avatar?.[0].url}
                  duration={video?.video?.lengthSeconds}
                  views={video?.video?.stats?.views}
                  publishedTm={video?.video?.publishedTimeText}
                />
              );
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
}
