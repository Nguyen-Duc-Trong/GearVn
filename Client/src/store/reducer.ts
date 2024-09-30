import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
const reducer = combineReducers({
  clientReducer: clientReducer,
});
export default reducer;
