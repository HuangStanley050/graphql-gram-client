import React from "react";

const Post = props => {
  return (
    <>
      <h1>{props.data.fileName}</h1>
      <img src={props.data.download} />
    </>
  );
};

export default Post;
