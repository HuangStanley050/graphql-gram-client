import * as actionType from "./actionTypes.js";

export const upload_start = file => {
  return {
    type: actionType.UPLOAD_START,
    file
  };
};
export const upload_okay = fileInfo => {
  return {
    type: actionType.UPLOAD_OKAY,
    fileInfo
  };
};
export const upload_fail = () => {};
