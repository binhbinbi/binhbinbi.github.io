import {delay, put, takeEvery} from "redux-saga/effects"
import * as types from '../actionTypes/todos1'

export function* function1() {
    console.log('saga===')
    yield put({ type: types.REDUCER_1 })
}

export function* function2() {
    console.log('saga===')
    yield put({ type: types.REDUCER_1_1 })
}

export default function* todo1() {
    yield takeEvery(types.TODO_1, function1)
    yield takeEvery(types.TODO_1_1, function2)
}