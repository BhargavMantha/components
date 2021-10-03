import React from "react";

const CommentDetail = props => {
  const { author, timeOfPost, content, imageSrc } = props;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={imageSrc} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeOfPost}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
