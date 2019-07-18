import * as actionType from "./actionTypes";

export const login_start = userInfo => ({
  type: actionType.LOGIN_START,
  userInfo
});

export const login_fail = message => ({
  type: actionType.LOGIN_FAIL,
  message
});

export const login_okay = userInfo => ({
  type: actionType.LOGIN_OKAY,
  userInfo
});

export const register_start = userInfo => ({
  type: actionType.REGISTER_START,
  userInfo
});
export const register_fail = message => ({
  type: actionType.REGISTER_FAIL,
  message
});

export const register_okay = () => ({type: actionType.REGISTER_OKAY});

export const logout = () => ({type: actionType.LOGOUT});
export const clear_data = () => ({type: actionType.CLEAR_DATA});
