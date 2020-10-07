import { all } from "redux-saga/effects";
import { postsList } from "./sagas/countries";

function* rootSaga() {
  yield all([
    /* */
    postsList(),
  ]);
}

export default rootSaga;
