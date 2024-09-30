import ActionProps from '@/interface/action';
import { TOGGLE_THEME } from './actions';
export const initialState = {
  theme: 'light',
};

const clientReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case TOGGLE_THEME:
      console.log(action.payload);

      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
export default clientReducer;
