import { useEffect, useState } from "react";

import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import Video from "./Videos";
import Shimmer from "./Shimmer/Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true);
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos(data?.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="mt-6 flex w-full flex-wrap md:gap-3  lg:ml-[0px] lg:gap-0 md:ml-24 lg:justify-between">
      {videos?.map((video) => {
        return <Video key={video.id} video={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
