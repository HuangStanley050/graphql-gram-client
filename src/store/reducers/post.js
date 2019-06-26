import * as actionType from "../actions/actionTypes";
const initialState = {
  posts: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case actionType.GET_POSTS_OKAY:
      console.log(action.posts);
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
