import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import MainVideo from "./MainVideo";
import RecommendedVideo from "./RecommendedVideo";
import VideoDescription from "./VideoDescription";
import CommentSection from "./CommentSection";
import { closeMenu } from "../utils/appSlice";
import BigSideBar from "./BigSideBar";
import { YOUTUBE_API_KEY } from "../utils/youtubeApiKey";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [videoData, setVideoData] = useState([]);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideoById();
  }, []);

  const getVideoById = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=In&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);
    const { items } = await response.json();
    setVideoData(items[0]);
    console.log(items[0]);
  };

  return (
    <div className="bg-black text-white ">
      <div
        className={`hidden h-screen md:fixed md:top-16 md:z-50 md:block md:w-[10%] ${
          isMenuOpen ? "lg:w-[20%]" : "lg:w-[7%]"
        } `}
      >
        <BigSideBar />
      </div>
      <div className="lg:grid lg:grid-cols-12">
        <MainVideo videoData={videoData} />
        <RecommendedVideo />
        <VideoDescription />
        <CommentSection />
      </div>
    </div>
  );
};

export default WatchPage;
