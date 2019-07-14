import * as actionType from "./actionTypes";
export const get_comments_start = () => ({
  type: actionType.FETCH_COMMENTS_START
});
export const get_comments_fail = () => ({
  type: actionType.FETCH_COMMENTS_FAIL
});
export const get_comments_okay = comments => ({
  type: actionType.FETCH_COMMENTS_OKAY,
  comments
});
export const delete_comment_start = commentId => ({
  type: actionType.DELETE_COMMENT_START,
  commentId
});
export const delete_comment_fail = () => ({
  type: actionType.DELETE_COMMENT_FAIL
});
export const delete_comment_okay = () => ({
  type: actionType.DELETE_COMMENT_OKAY
});
