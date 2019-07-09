import {takeEvery, put, select} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {get_comments_okay, get_comments_fail} from "../actions/commentActions";
import API from "../../constants/API";
import {getCurrentPost} from "./getState";
import axios from "axios";
const api_path = API.api_path;

function* commentSagaWatcher() {
  yield takeEvery(actionType.FETCH_COMMENTS_START, fetchCommentsSagaWorker);
}

function* fetchCommentsSagaWorker(action) {
  //yield console.log(action);
  const token = localStorage.getItem("graphgram-token");
  let postId = yield select(getCurrentPost);

  try {
    let result = yield axios({
      headers: {Authorization: "bearer " + token},
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
              }
            }
        `
      }
    });
    console.log(result.data.data.comments);
  } catch (e) {
    console.log(e);
  }
}

export default commentSagaWatcher;
