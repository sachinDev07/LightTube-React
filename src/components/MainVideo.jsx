import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { YOUTUBE_API_KEY } from "../utils/youtubeApiKey";

const MainVideo = ({ videoData }) => {
  const { id, snippet, statistics } = videoData;

  const [channelIcon, setChannelIcon] = useState();
  const [subscribers, setSubscribers] = useState();

  useEffect(() => {
    getChannelIcon();
    getSubscribers();
  }, [snippet?.channelId]);

  const getChannelIcon = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet?.channelId}&maxResults=50&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    const channel = data.items[0];
    const channelIcon = channel?.snippet?.thumbnails?.default;
    setChannelIcon(channelIcon);
  };

  const getSubscribers = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${snippet?.channelId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);
    const { items } = await response.json();
    setSubscribers(items[0]);
  };

  const abbreviateViewsCount = (views) => {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + "B";
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed() + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed() + "K";
    } else {
      return views?.toString();
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
    <div className="w-full px-5 text-red-800 md:py-1 lg:col-span-8">
      <div className="md:bg-black] h-[300px] text-black md:h-[350px] lg:ml-10 lg:mt-5 lg:h-[450px] ">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full object-cover "
        ></iframe>
      </div>
      <div className="px-2 md:mt-4 md:px-0 lg:ml-10 ">
        <div>
          <h1 className="line-clamp-2 text-[21px] font-bold text-[#f1f1f1] lg:text-xl lg:font-bold">
            {snippet?.localized?.title}
          </h1>
          <div className="lg:hidden">
            <span className="text mr-2 text-base text-[#aaaaaa]">
              {abbreviateViewsCount(statistics?.viewCount)} views
            </span>
            <span className="text mr-2 text-base text-[#aaaaaa]">
              {moment(snippet?.publishedAt).fromNow()}
            </span>
          </div>
        </div>
        <div className="mb-3 mt-3 flex items-center justify-between ">
          <div className="flex">
            <div className="mr-64 flex items-center gap-2 md:mr-10">
              <Link to="">
                <img
                  className="h-full w-[35px] cursor-pointer rounded-3xl object-cover"
                  src={channelIcon?.url}
                  alt=""
                />
              </Link>
              <div className="lg:flex lg:flex-col">
                <span className="mr-2 cursor-pointer font-bold text-white">
                  {snippet?.channelTitle}
                </span>
                <span className="text-sm text-[#aaaaaa]">
                  {abbreviateViewsCount(
                    subscribers?.statistics?.subscriberCount
                  )}{" "}
                  subscribers
                </span>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-3xl bg-[#303030] px-3 shadow-sm transition duration-200 ease-linear focus-visible:outline md:hover:bg-[#5d5c5c]">
              <i className="fa-regular fa-bell text-white"></i>
              <button
                type="button"
                className="rounded-full text-base font-bold text-white  "
              >
                Subscribe
              </button>
              <i className="fa fa-chevron-down text-white"></i>
            </div>
          </div>
          <div className="hidden gap-3 md:flex">
            <div className="flex gap-3 rounded-3xl bg-[#303030] px-3 py-2 md:hover:bg-[#474747]">
              <div className="cursor-pointer text-white">
                <i className="fa fa-thumbs-up text-base"></i>
              </div>
              <div className="text-base text-white">
                {abbreviateViewsCount(statistics?.likeCount)}
              </div>
              <div className="cursor-pointer text-white">
                <i className="fa fa-thumbs-down text-base"></i>
              </div>
            </div>
            <div className="flex cursor-pointer gap-2 rounded-3xl bg-[#303030] px-3 py-2 text-white md:hover:bg-[#474747]">
              <span>
                <i className="fa fa-share text-xs"></i>
              </span>
              <span>Share</span>
            </div>
            <div className="flex cursor-pointer gap-1 rounded-3xl bg-[#303030] px-3 py-2 text-white md:hover:bg-[#474747] lg:hidden">
              <span>
                <i className="fa-solid fa-arrow-down"></i>
              </span>
              <span>Download</span>
            </div>
            <div className="flex cursor-pointer gap-3 rounded-2xl bg-[#303030] px-3 py-2 text-white md:hover:bg-[#474747]">
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              <span>Save</span>
            </div>
            <div className="cursor-pointer rounded-3xl bg-[#303030] px-4 py-[2px] align-middle text-lg text-white md:hover:bg-[#474747]  ">
              <span className="flex items-center justify-center">...</span>
            </div>
          </div>
        </div>
        <div className="mb-3 flex justify-between gap-3 text-white md:hidden ">
          <div className="flex gap-3 rounded-3xl bg-[#272727] px-3 py-2">
            <div>
              <i className="fa fa-thumbs-up text-base"></i>
            </div>
            <div className="text-base text-white">
              {abbreviateViewsCount(statistics?.likeCount)}
            </div>
            <div>
              <i className="fa fa-thumbs-down text-base"></i>
            </div>
          </div>
          <div className="flex gap-3 rounded-3xl bg-[#272727] px-4 py-2 ">
            <span>
              <i className="fa fa-share text-xs"></i>
            </span>
            <span>Share</span>
          </div>
          <div className="flex gap-1 rounded-3xl bg-[#272727] px-3 py-2">
            <span>
              <i className="fa-solid fa-arrow-down"></i>
            </span>
            <span>Download</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
