import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import { loging_fail, login_okay } from "../actions/authActions.js";

const api_path = "http://localhost:4000";

function* authSagaWatcher() {
  yield takeEvery(actionType.LOGIN_START, authSagaWorker);
}

function* authSagaWorker(action) {
  try {
    let result = yield axios({
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      url: api_path,
      data: {
        query: `
            mutation {
            login(data:{email:"${action.userInfo.email}",password:"${
          action.userInfo.password
        }"}) {
              userId,
              token,
              tokenExpiration
            }
          }
        `
      }
    });
    //yield console.log(result.data.data.login);
    yield localStorage.setItem("graphgram-token", result.data.data.login.token);
    yield put(login_okay(result.data.data.login));
  } catch (err) {
    console.log(err);
  }
}

export default authSagaWatcher;
