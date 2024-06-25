import { combineReducers } from 'redux';
import posReducer from '../pos/reducers';
import accountingReducer from '../accounting/reducers';

export default combineReducers({
  pos: posReducer,
  accounting: accountingReducer
});
