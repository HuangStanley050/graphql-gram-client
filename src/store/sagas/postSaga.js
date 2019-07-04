import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {get_posts_okay, get_posts_fail} from "../actions/postActions";
import {upload_okay} from "../actions/uploadActions";
import API from "../../constants/API";
import axios from "axios";
const api_path = API.api_path;
const upload_path = API.upload_path;

function* postSagaWatcher() {
  yield takeEvery(actionType.GET_POSTS_START, postSagaWorker);
  yield takeEvery(actionType.UPLOAD_START, uploadSagaWorker);
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
