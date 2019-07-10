import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "./store/reducers/auth";
import postReducer from "./store/reducers/post";
import rootSaga from "./store/sagas/";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
