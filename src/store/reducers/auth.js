import * as actionType from "../actions/actionTypes";
const initialState = {
  isAuth: false,
  isRegistered: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actionType.LOGIN_OKAY:
      return {
        ...state,
        loading: false,
        isAuth: true
      };
    default:
      return state;
  }
};

export default reducer;
