import { combineReducers } from 'redux';
import { actName } from './actions';

let reducers = {};

reducers.counter = (state, action) => {
  switch (action.type) {
    case actName.ADD:        
      return state + action.num;
      case actName.QUIT:
      return state - action.num;
    default:
      return state || 0;
  }
};

reducers.data = (state, action) => {
  switch (action.type) {
    case actName.FETCH_DATA_SUCCESS:        
      return action.data;
    case actName.FETCH_DATA_ERROR:        
      return [];
    default:
      return state || [];
  }
};


const reducersCombined = combineReducers(reducers);

export default reducersCombined;