import * as actionType from "./actionTypes";

export const get_ownFiles_start = id => ({
  type: actionType.GET_OWN_FILES_START
});
export const get_ownFiles_fail = err => ({
  type: actionType.GET_OWN_FILES_FAIL,
  err
});
export const get_ownFiles_okay = data => ({
  type: actionType.GET_OWN_FILES_OKAY,
  data
});
