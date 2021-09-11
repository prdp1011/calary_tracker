
import { combineReducers } from 'redux';
import loginReducer from './login';
import mealReducer from './meal';


export default combineReducers({
  user: loginReducer,
  meal: mealReducer
});