import * as actionType from "./actionTypes";

export const get_posts_start = () => ({ type: actionType.GET_POSTS_START });

export const current_post = postId => ({
  type: actionType.CURRENT_POST,
  postId
});

export const add_comment_start = comment => ({
  type: actionType.ADD_COMMENT_START,
  comment
});

export const add_comment_okay = confirmation => ({
  type: actionType.ADD_COMMENT_OKAY,
  confirmation
});

export const add_comment_fail = () => ({ type: actionType.ADD_COMMENT_FAIL });

export const get_posts_okay = posts => ({
  type: actionType.GET_POSTS_OKAY,
  posts
});

export const get_posts_fail = () => {};

export const infinity_fetch_start = page => ({
  type: actionType.INFINITY_START,
  page
});
export const infinity_fetch_okay = post => ({
  type: actionType.INFINITY_OKAY,
  post
});
