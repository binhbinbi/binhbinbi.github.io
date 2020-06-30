import {all} from "redux-saga/effects"
import todos1 from "./todos1"
import todos2 from "./todos2"

export default function* rootSaga() {
    yield all([
      todos1(),
      todos2()
    ])
  }