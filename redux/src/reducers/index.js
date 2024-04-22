import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  emp: employeeReducer,
  details: detailsReducer,
});

export default rootReducer;
