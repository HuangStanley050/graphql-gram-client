import React from "react";
import {Spinner} from "reactstrap";

const CommentLoader = props => {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={loaderStyle}>
      <Spinner size="sm" color="primary" />
    </div>
  );
};

export default CommentLoader;
