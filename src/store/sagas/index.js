import {all} from "redux-saga/effects";
import authSaga from "./authSaga";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";
import personalSaga from "./personalSaga";

export default function* rootSaga() {
  yield all([authSaga(), postSaga(), commentSaga(), personalSaga()]);
}
