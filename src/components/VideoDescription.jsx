import React, { useState } from "react";
import moment from "moment";

const VideoDescription = ({ videoData }) => {
  const { id, snippet, statistics } = videoData;

  const [showMore, setShowMore] = useState(false);

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

  return (
    <div className="lg:col-span-8 lg:pl-14 lg:pr-4">
      <div className="rounded-xl bg-[#363535] hover:bg-[#5a5959] lg:p-3">
        <div className="">
          <span className="text mr-3 text-base font-bold text-[#ffffff]">
            {abbreviateViewsCount(statistics?.viewCount)} views
          </span>
          <span className="text mr-2 text-base font-bold text-[#ffffff]">
            {moment(snippet?.publishedAt).fromNow()}
          </span>
        </div>
        <div className="empty:hidden">
          {showMore
            ? snippet?.description
            : `${snippet?.description.substring(0, 350)}`
          }
          <button
            className={`text-base  font-medium ${showMore ? "block" : "ml-2"}`}
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show less" : "show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
