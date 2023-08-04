import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.text}</p>
      <p>{comment.date}</p>
    </div>
  );
};

export default Comment;
