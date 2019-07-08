import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import API from "../../constants/API";
import {
  login_fail,
  login_okay,
  register_okay,
  register_fail
} from "../actions/authActions.js";

const api_path = API.api_path;

function* authSagaWatcher() {
  yield takeEvery(actionType.LOGIN_START, authSagaWorker);
  yield takeEvery(actionType.REGISTER_START, registerSagaWorker);
}

function* registerSagaWorker(action) {
  //yield console.log(action);
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
               createUser(data:{email:"${action.userInfo.email}",password:"${
          action.userInfo.password
        }",name:"${action.userInfo.name}"}) {
                 id
                 name
                 email
               }
             }

        `
      }
    });

    yield put(register_okay());
  } catch (err) {
    console.log(err);
  }
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
    yield put(login_fail());
    console.log(err);
  }
}

export default authSagaWatcher;
