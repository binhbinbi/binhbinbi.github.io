import * as types from '../actionTypes/todos1'
import defaultState from './defaultState'

const todos1 = (state = defaultState.todos1, action) => {
    switch (action.type) {
      case types.REDUCER_1:
        return {
          ...state,
          field1: true
        }
      case types.REDUCER_1_1:
        return {
          ...state,
          field2: true
        }
      default:
        return state
    }
  }
  export default todos1