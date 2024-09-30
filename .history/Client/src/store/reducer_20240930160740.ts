import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
const reducer = combineReducers({
  clientReducer: clientReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
