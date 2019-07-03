import * as actionType from "../actions/actionTypes";
const initialState = {
  posts: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_POSTS_START:
    case actionType.UPLOAD_START:
      return {
        ...state,
        loading: true
      };
    case actionType.UPLOAD_OKAY:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.fileInfo]
      };
    case actionType.GET_POSTS_OKAY:
      return {
        ...state,
        posts: [...action.posts],
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
