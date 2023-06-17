import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Img from "./lazyLoadImage/Img";
import { YOUTUBE_API_KEY } from "../utils/youtubeApiKey";
import moment from "moment";
import VideoLength from "./VideoLength";

const Video = ({ video }) => {
  const {
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    statistics: { viewCount },
  } = video;

  console.log(video?.contentDetails?.duration);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [channelIcon, setChannelIcon] = useState([]);

  const duration = video?.contentDetails?.duration;
  const seconds = moment.duration(duration).asSeconds();
  const videoLength = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    getChannelIcon();
  }, [channelId]);

  const getChannelIcon = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&maxResults=50&key=` +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    setChannelIcon(json?.items[0]?.snippet?.thumbnails?.default);
  };

  const abbreviateViewsCount = (views) => {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + "B";
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views.toString();
    }
  };

  function getTimeFromDate(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
  }

  return (
    <div
      className={`group mb-8 w-full cursor-pointer md:w-[300px] ${
        isMenuOpen === true ? "lg:w-[360px]" : "lg:w-[325px]"
      }`}
    >
      <div
        className={`relative w-full md:w-[300px] ${
          isMenuOpen === true ? "lg:w-[360px]" : "lg:w-[325px]"
        } `}
      >
        <Img
          className={` w-[100vw] object-cover md:w-[300px] md:rounded-lg ${
            isMenuOpen === true ? "lg:w-[360px]" : "lg:w-[325px]"
          }`}
          src={medium.url}
        />

        <VideoLength videoLength={videoLength} />
      </div>
      <div className="mt-3 flex w-full justify-center gap-2 px-3 md:px-0">
        <div className="mr-1 h-full w-[40px] cursor-pointer md:w-[36px]">
          <Img
            className="h-full w-[40px] rounded-3xl object-cover md:h-[36px] md:w-[36px]"
            src={channelIcon?.url}
          />
        </div>
        <div className="w-[320px] md:w-[230px] lg:w-[300px] ">
          <p className="line-clamp-2 font-bold text-[#f1f1f1]">{title}</p>
          <span className="mb-0 mt-2 inline-block font-roboto text-sm text-[#aaaaaa] hover:text-white">
            {channelTitle}
          </span>
          <div className="flex w-full items-center font-roboto ">
            <span className="text mr-2 text-sm text-[#aaaaaa]">
              {abbreviateViewsCount(viewCount)} views
            </span>
            <div className="mr-2 h-1 w-1 rounded-full bg-[#aaaaaa]"></div>
            <span className="text-sm text-[#aaaaaa]">
              {moment(publishedAt).fromNow()}
            </span>
          </div>
        </div>
        <div className="invisible ml-1 mt-1 transition duration-200 ease-in-out group-hover:visible ">
          <div className="mb-[3px] h-1 w-1 rounded-full bg-[#f1f1f1]"></div>
          <div className="mb-[3px] h-1 w-1 rounded-full bg-[#f1f1f1]"></div>
          <div className="h-1 w-1 rounded-full bg-[#f1f1f1]"></div>
        </div>
        hgh
      </div>
    </div>
  );
};

export default Video;
