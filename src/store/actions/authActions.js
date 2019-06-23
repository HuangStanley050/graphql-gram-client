import * as actionType from "./actionTypes";

export const login_start = userInfo => ({
  type: actionType.LOGIN_START,
  userInfo
});

export const loging_fail = message => ({
  type: actionType.LOGIN_FAIL,
  message
});

export const login_okay = userInfo => ({
  type: actionType.LOGIN_OKAY,
  userInfo
});
