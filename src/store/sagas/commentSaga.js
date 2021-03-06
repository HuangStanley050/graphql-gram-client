import { takeEvery, put, select } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {
  get_comments_okay,
  get_comments_fail,
  delete_comment_okay,
  delete_comment_fail
} from "../actions/commentActions";
import API from "../../constants/API";
import { getCurrentPost, getPostStatus } from "./getState";
import axios from "axios";
const api_path = API.api_path;

function* commentSagaWatcher() {
  yield takeEvery(actionType.FETCH_COMMENTS_START, fetchCommentsSagaWorker);
  yield takeEvery(actionType.DELETE_COMMENT_START, deleteCommentSagaWorker);
}

function* deleteCommentSagaWorker(action) {
  yield console.log(action);
  const token = localStorage.getItem("graphgram-token");
  const commentId = action.commentId;
  try {
    let result = yield axios({
      headers: { Authorization: "bearer " + token },
      method: "post",
      url: api_path,
      data: {
        query: `
          mutation {
            deleteComment(data:{commentId:"${commentId}"}){
              id
              comment
              postId
            }
          }

        `
      }
    });
    //console.log(result.data.data.deleteComment);
    yield put(delete_comment_okay(commentId));
  } catch (err) {
    console.log(err);
  }
}

function* fetchCommentsSagaWorker(action) {
  //yield console.log(action);
  const token = localStorage.getItem("graphgram-token");
  let postId = yield select(getCurrentPost);
  let postStatus = yield select(getPostStatus); //let saga knows if the postChanged status is true or false
  //console.log(postStatus);
  if (postStatus) {
    try {
      let result = yield axios({
        headers: { Authorization: "bearer " + token },
        method: "post",
        url: api_path,
        data: {
          query: `
            query {
              comments(postId:"${postId}") {
                id
                userId
                postId
                comment
                userName
              }
            }
        `
        }
      });
      //console.log(result.data.data.comments);
      yield put(get_comments_okay(result.data.data.comments));
      yield put({ type: "POST_NO_CHANGE" });
    } catch (e) {
      console.log(e);
      yield put(get_comments_fail());
    }
  } else yield put({ type: "FETCH_COMMENTS_STOP" });
}

export default commentSagaWatcher;
