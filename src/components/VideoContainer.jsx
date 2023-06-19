import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Video from "./Videos";
import Shimmer from "./Shimmer/Shimmer";
import { YOUTUBE_API_KEY } from "../utils/youtubeApiKey";

const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&part=contentDetails&chart=mostPopular&maxResults=50&regionCode=IN`;

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}&prevPageToken=${prevPageToken}&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setVideos(prevVideos => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
      setPrevPageToken(data.prevPageToken);
      console.log(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const visibleHeight = document.documentElement.clientHeight;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollY + visibleHeight >= totalHeight * 0.8) {
      getVideos();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="mt-6 flex w-full flex-wrap md:ml-24  md:gap-3 lg:ml-[0px] lg:justify-between lg:gap-0">
      {videos?.map((video, index) => {
        const uniqueKey = `${video.id}-${index}`;
        return (
          <Link to={`watch?v=`+ video.id} key={uniqueKey}>
            <Video  video={video} />
          </Link>
        );
      })}
    </div>
    
  );
};

export default VideoContainer;