import { combineReducers } from 'redux';
import { actName } from './actions';

let reducers = {};

reducers.language = (state, action) => {
  switch (action.type) {
    case actName.SET_LANG:        
      return action.lang;
    default:
      return state || 'en';
  }
};


const reducersCombined = combineReducers(reducers);

export default reducersCombined;