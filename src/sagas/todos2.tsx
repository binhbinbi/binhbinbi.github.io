import {delay, put, takeEvery, call} from "redux-saga/effects"
import * as types from '../actionTypes/todos2'

export function* function1() {
    console.log('saga===')
    yield call(function2)
}

export function* function2() {
    console.log('saga===')
    yield put({ type: types.REDUCER_2 })
}

export default function* todo2() {
    yield takeEvery(types.TODO_2, function1)
}