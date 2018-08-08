import { combineReducers } from 'redux';
import App from './app/reducer';
import Home from './home/reducer';

export default combineReducers({
  App,
  Home
})