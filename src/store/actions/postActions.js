import * as actionType from "./actionTypes";

export const get_posts_start = () => ({type: actionType.GET_POSTS_START});

export const get_posts_okay = posts => ({
  type: actionType.GET_POSTS_OKAY,
  posts
});

export const get_posts_fail = () => {};
