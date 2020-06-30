import * as types from '../actionTypes/todos2'
import defaultState from './defaultState'

const todos2 = (state = defaultState.todos2, action) => {
    switch (action.type) {
      case types.REDUCER_2:
        return {
          ...state,
          field1: true
        }
      case types.REDUCER_2_1:
        return {
          ...state,
          field2: true
        }
      default:
        return state
    }
  }
  export default todos2