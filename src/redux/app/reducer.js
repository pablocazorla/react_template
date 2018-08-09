import { combineReducers } from 'redux';
import { actName } from './actions';
import {defaultLanguage} from '../../config';

let reducers = {};

reducers.language = (state, action) => {
  switch (action.type) {
    case actName.SET_LANG:        
      return action.lang;
    default:
      return state || defaultLanguage;
  }
};


const reducersCombined = combineReducers(reducers);

export default reducersCombined;