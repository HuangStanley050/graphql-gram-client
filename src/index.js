import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";
import authReducer from "./store/reducers/auth";
import postReducer from "./store/reducers/post";
import rootSaga from "./store/sagas/";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer
});

let currentPost = "";
const customMiddleWare = store => next => action => {
  if (action.type === "FETCH_COMMENTS_START") {
    let previousPost = currentPost;
    let temp = store.getState();
    currentPost = temp.post.currentPost;
    console.log("this is previous post: ", previousPost);
    if (previousPost !== currentPost) {
      console.log("Post has changed");
      console.log("this is current post!!: ", currentPost);
      store.dispatch({type: "POST_CHANGED"});
    } else {
      store.dispatch({type: "POST_NO_CHANGE"});
    }
  }
  next(action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(customMiddleWare, sagaMiddleware))
);

// function select(state) {
//   return state.post.currentPost;
// }
//
// let currentValue = "";
// function handleChange() {
//   let previousValue = currentValue;
//   currentValue = select(store.getState());
//
//   if (previousValue !== currentValue) {
//     store.dispatch({type: "POST_CHANGED"});
//     console.log(
//       "Some deep nested property changed from",
//       previousValue,
//       "to",
//       currentValue
//     );
//   } else {
//     console.log("post hasn't been changed");
//   }
// }
// store.subscribe(handleChange);

sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
