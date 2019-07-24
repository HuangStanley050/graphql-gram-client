import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import API from "../../constants/API";
import {
  get_ownFiles_okay,
  get_ownFiles_fail
} from "../actions/ownFilesActions";
const api_path = API.api_path;

function* personalSagaWatcher() {
  yield takeEvery(actionType.GET_OWN_FILES_START, personalSagaWorker);
}

function* personalSagaWorker(action) {
  const token = localStorage.getItem("graphgram-token");
  //yield console.log(action);

  const fileConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + token
    },
    method: "post",
    url: api_path,
    data: {
      query: `
           query {
             ownFiles(data:"${action.id}"){
               download
               fileName
             }
           }
           `
    }
  };
  try {
    let result = yield axios(fileConfig);
    yield put(get_ownFiles_okay(result.data.data.ownFiles));
    //console.log(result.data.data.ownFiles);
  } catch (err) {
    console.log(err);
  }
}

export default personalSagaWatcher;
