import {Class} from '../models/class.model';
import * as ClassActions from '../actions/class.action';
const initialState: Class = {
  name: 'Clase Inicial',
  url: 'https://platzi.com'
};

export function reducer(state: Class[] = [initialState], action: ClassActions.Actions) {
  switch (action.type) {
    case ClassActions.ADD_CLASS:
      return [...state, action.payload];
    case ClassActions.REMOVE_CLASS:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
