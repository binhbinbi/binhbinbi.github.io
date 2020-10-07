import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga';
import {MakeStore, createWrapper} from 'next-redux-wrapper';
// import { NODE_ENV } from '../../env';
const initialState = {};

export interface State {
}

const bindMiddleware = (middleware:any) => {
  // if (NODE_ENV !== 'production') {
  //   return composeWithDevTools(applyMiddleware(...middleware));
  // }
  return applyMiddleware(...middleware);
};

// const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSaga);

  // return store;
// };

// create a makeStore function
const makeStore: MakeStore<State> = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, {debug: true});

// export default configureStore;
