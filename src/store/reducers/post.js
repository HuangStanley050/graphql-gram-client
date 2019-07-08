import * as actionType from "../actions/actionTypes";
const initialState = {
  posts: [],
  currentPost: "",
  comments: [],
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
    case actionType.ADD_COMMENT_OKAY:
      const comment = {
        userId: action.confirmation.userId,
        comment: action.confirmation.comment
      };
      return {
        ...state,
        comments: [...state.comments, comment]
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
    case actionType.CURRENT_POST:
      return {
        ...state,
        currentPost: action.postId
      };
    default:
      return state;
  }
};

export default reducer;
