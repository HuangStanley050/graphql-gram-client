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
  yield console.log(action);
}

export default commentSagaWatcher;
