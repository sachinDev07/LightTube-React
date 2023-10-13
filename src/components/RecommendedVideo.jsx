import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";

const RecommendedVideo = () => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setWidth(true);
      setShowLiveChat((prev) => !prev);
    }
  }, [window.innerWidth]);

  return (
    <div className="ml-6 lg:col-span-4 lg:row-span-6 lg:ml-0">
      <button
        onClick={() => setShowLiveChat((prev) => !prev)}
        className={`${width ? "lg:hidden" : "lg:block"}`}
      >
        show live chat
      </button>
      {showLiveChat && <LiveChat />}
    </div>
  );
};

export default RecommendedVideo;
