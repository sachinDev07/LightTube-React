import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import Video from "./Videos";
import Shimmer from "./Shimmer/Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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
    <div className="mt-6 flex w-full flex-wrap md:ml-24  md:gap-3 lg:ml-[0px] lg:justify-between lg:gap-0">
      {videos?.map((video) => {
        return (
          <Link to={`watch?v=`+ video.id} key={video.id}>
            <Video  video={video} />
          </Link>
        );
      })}
    </div>
    
  );
};

export default VideoContainer;
