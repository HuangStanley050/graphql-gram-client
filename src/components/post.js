import React from "react";

const Post = props => {
  return (
    <>
      <h1>{props.data.fileName}</h1>
      <img style={{width: "200px"}} alt="picture" src={props.data.download} />
    </>
  );
};

export default Post;
