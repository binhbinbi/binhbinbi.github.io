import { combineReducers } from 'redux';
import countries from './reducers/countries';
const reducer = combineReducers({
  countries,
});
export default reducer;
