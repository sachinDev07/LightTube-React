import React from "react";

import userImg from "../assets/userImg.png";

const ChatMessages = ({ name, chatMessage }) => {
  return (
    <div className="mt-2 flex items-center gap-2 ">
      <img className="h-9 w-9" src={userImg} alt="user-image" />
      <div>
        <span className="font-bold">{name}</span>
        <span className="ml-2">{chatMessage}</span>
      </div>
    </div>
  );
};

export default ChatMessages;
