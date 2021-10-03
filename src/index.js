import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./comment-detail.component";
import faker from "faker";
import ApprovalCard from "./approval-card.component";
const getImageSrc = () => {
  return faker.image.avatar();
};
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Bhargav"
          timeOfPost="Today at 6:00 PM"
          content="Really Awesome"
          imageSrc={getImageSrc()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeOfPost="Today at 7:00 PM"
          content="Awesome Blog post "
          imageSrc={getImageSrc()}
        />
      </ApprovalCard>
      <ApprovalCard>
        {" "}
        <CommentDetails
          author="Jane"
          timeOfPost="Today at 8:00 PM"
          content="Good Post"
          imageSrc={getImageSrc()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
