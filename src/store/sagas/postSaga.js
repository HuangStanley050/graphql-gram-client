import {takeEvery, put, select} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {
  get_posts_okay,
  get_posts_fail,
  add_comment_okay
} from "../actions/postActions";
import {upload_okay} from "../actions/uploadActions";
import API from "../../constants/API";
import axios from "axios";
import {getUserId, getCurrentPost} from "./getState";
const api_path = API.api_path;
const upload_path = API.upload_path;

function* postSagaWatcher() {
  yield takeEvery(actionType.GET_POSTS_START, postSagaWorker);
  yield takeEvery(actionType.UPLOAD_START, uploadSagaWorker);
  yield takeEvery(actionType.ADD_COMMENT_START, commentSagaWorker);
}

function* commentSagaWorker(action) {
  const token = localStorage.getItem("graphgram-token");
  const currentPost = yield select(getCurrentPost);
  const userId = yield select(getUserId);
  //const name = yield select(getUserName);
  const comment = action.comment;
  //yield console.log(action.comment, currentPost, userId);
  try {
    let result = yield axios({
      headers: {
        authorization: "bearer " + token
      },
      method: "post",
      url: api_path,
      data: {
        query: `
             mutation {
               createComment(data:{postId:"${currentPost}",userId:"${userId}",comment:"${comment}"}) {
               userId,
               comment,
               postId,
               userName
              }
            }
        `
      }
    });
    let confirmation = result.data.data.createComment;
    yield put(add_comment_okay(confirmation));
  } catch (err) {
    console.log(err);
  }
}
function* uploadSagaWorker(action) {
  const token = localStorage.getItem("graphgram-token");
  try {
    let result = yield axios({
      headers: {
        Authorization: "bearer " + token
      },
      method: "post",
      url: upload_path,
      data: action.file
    });
    //yield console.log(result.data);
    yield put(upload_okay(result.data));
  } catch (err) {
    console.log(err);
  }
}

function* postSagaWorker(action) {
  const token = localStorage.getItem("graphgram-token");
  //yield console.log("worker running! ", token);
  try {
    let result = yield axios({
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      },
      method: "post",
      url: api_path,
      data: {
        query: `
            query {
              allposts {
                fileName
                download
                postId
              }
            }

        `
      }
    });
    const posts = result.data.data.allposts;
    yield put(get_posts_okay(posts));
  } catch (err) {
    console.log(err);
    yield put(get_posts_fail());
  }
}

export default postSagaWatcher;
