import { takeLatest } from "redux-saga/effects";

import {
  POST_LIST_REQUEST,
} from "../types/countries";


export function* postsListCountry() {
    //todo
}

export function* postsList() {
    yield takeLatest(POST_LIST_REQUEST, postsListCountry);
  }
  