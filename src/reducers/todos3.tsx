import * as types from '../actionTypes/todos3'
import defaultState from './defaultState'

const todos3 = (state = defaultState.todos3, action) => {
    switch (action.type) {
      case types.TODO_3:
        return {
          ...state,
          field1: true
        }
      default:
        return state
    }
  }
  export default todos3