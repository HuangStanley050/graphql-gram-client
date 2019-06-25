import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { get_post_okay, get_posts_fail } from "../actions/postActions";
import axios from "axios";

function* postSagaWatcher() {}

function* postSagaWorker(action) {}

export default postSagaWatcher;
