import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {get_comments_okay, get_comments_fail} from "../actions/commentActions";
import API from "../../constants/API";
import axios from "axios";
const api_path = API.api_path;

function* commentSagaWatcher() {
  yield takeEvery(actionType.FETCH_COMMENTS_START, fetchCommentsSagaWorker);
}

function* fetchCommentsSagaWorker(action) {
  //yield console.log(action);
  const token = localStorage.getItem("graphgram-token");
  let temp_id = "5d071e9aee1bcb13631e07e7";
  try {
    let result = yield axios({
      headers: {Authorization: "bearer " + token},
      method: "post",
      url: api_path,
      data: {
        query: `
            query {
              comments(postId:"${temp_id}") {
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
