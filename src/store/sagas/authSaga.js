import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {loging_fail, login_okay} from "../actions/authActions.js";

function* authSagaWatcher() {
  yield takeEvery(actionType.LOGIN_START, authSagaWorker);
}

function* authSagaWorker(action) {
  yield console.log(action);
}

export default authSagaWatcher;
