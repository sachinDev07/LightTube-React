import Comments from "./Comments";

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div className="">
        <Comments key={index} data={comment} />
        <div className="ml-12 border-l-2 border-yellow-500 ">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  export default CommentsList;