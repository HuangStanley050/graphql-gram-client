import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import API from "../../constants/API";
import {get_ownFiles_okay, get_ownFiles_fail} from "../actions/ownFilesActions";
const api_path = API.api_path;

function* personalSagaWatcher() {
  yield takeEvery(actionType.GET_OWN_FILES_START, personalSagaWorker);
}

function* personalSagaWorker(action) {
  yield console.log(action);
}

export default personalSagaWatcher;
