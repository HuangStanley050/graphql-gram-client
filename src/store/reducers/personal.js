import * as actionType from "../actions/actionTypes";

const initialState = {
  files: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CLEAR_DATA:
      return {
        ...state,
        files: []
      };
    case actionType.GET_OWN_FILES_OKAY:
      return {
        ...state,
        files: [...action.data]
      };
    default:
      return state;
  }
};

export default reducer;
