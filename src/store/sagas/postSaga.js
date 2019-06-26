import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {get_post_okay, get_posts_fail} from "../actions/postActions";
import axios from "axios";
const api_path = "http://localhost:4000";
function* postSagaWatcher() {
  yield takeEvery(actionType.GET_POSTS_START, postSagaWorker);
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
              }
            }

        `
      }
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

export default postSagaWatcher;
