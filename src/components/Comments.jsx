import React from "react";

import userImg from "../assets/userImg.png";

const Comments = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex gap-2 mb-3">
      <img className="h-12 w-12" src={userImg} alt="user-img" />
      <div>
        <span className="font-bold">{name}</span>
        <p className="text-white">{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
