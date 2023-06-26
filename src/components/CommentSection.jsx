import React from "react";

import { commentsData } from "../utils/constant";
import CommentsList from "./CommentsList";

const CommentSection = () => {
  return (
    <div className="col-span-8 ml-14 mt-1 pr-4 py-2">
      <div className="rounded-lg bg-[#363535] py-2">
        <h1 className="ml-2 text-2xl font-bold">Comment :</h1>
        <div className="mt-1 p-2 ">
          <CommentsList comments={commentsData} />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
