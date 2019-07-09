import * as actionType from "./actionTypes";
export const get_comments_start = () => ({
  type: actionType.FETCH_COMMENTS_START
});
export const get_comments_fail = () => ({type: actionType.FETCH_COMMENTS_FAIL});
export const get_comments_okay = comments => ({
  type: actionType.FETCH_COMMENTS_OKAY,
  comments
});
