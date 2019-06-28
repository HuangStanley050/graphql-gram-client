import React from "react";

const Upload = props => {
  const uploadStyle = {
    fontSize: "9rem",
    position: "fixed",
    bottom: "60px",
    right: "15px"
  };
  return <i style={uploadStyle} class="fas fa-plus-square" />;
};

export default Upload;
