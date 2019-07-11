import * as actionType from "../actions/actionTypes";
import jwt_decode from "jwt-decode";
const initialState = {
  isAuth: false,
  userData: {
    userId: "",
    email: ""
  },
  isRegistered: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REGISTER_OKAY:
      return {
        ...state,
        isRegistered: true
      };
    case actionType.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actionType.LOGIN_OKAY:
      const decoded = jwt_decode(action.userInfo.token);
      //console.log(decoded);
      return {
        ...state,
        loading: false,
        userData: {
          ...state.userInfo,
          userId: decoded.userId,
          email: decoded.email,
          name: decoded.name
        },
        isAuth: true
      };
    case actionType.LOGOUT:
      localStorage.removeItem("graphgram-token");
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};

export default reducer;
