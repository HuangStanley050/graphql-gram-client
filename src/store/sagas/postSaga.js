import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { get_posts_okay, get_posts_fail } from "../actions/postActions";
import API from "../../constants/API";
import axios from "axios";
const api_path = API.api_path;

function* postSagaWatcher() {
  yield takeEvery(actionType.GET_POSTS_START, postSagaWorker);
  yield takeEvery(actionType.UPLOAD_START, uploadSagaWorker);
}

function* uploadSagaWorker(action) {
  yield console.log(action.file.get("file"));
  const token = localStorage.getItem("graphgram-token");
  try {
    let result = yield axios({
      headers: {
        Authorization: "bearer " + token
      },
      method: "post",
      url: api_path,
      data: {
        query: `

              mutation Upload($file:Upload!) {
                singleUpload(file:$file){
                  id
                  fileName
                  download
                }
              }
            
        `,
        variables: {
          file: action.file
        }
      }
    });
    console.log(result.data.data);
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
