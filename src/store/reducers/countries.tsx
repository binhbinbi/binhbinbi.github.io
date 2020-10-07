import {
    POST_LIST_REQUEST
  } from "../types/countries";
  
  const initialState = {
  };
  export default (state = initialState, action:any) => {
    switch (action.type) {
      case POST_LIST_REQUEST:
        return { ...state, postsList: { isFetching: true } };
      default:
        return state;
    }
  };
  