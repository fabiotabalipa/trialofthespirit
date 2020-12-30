import {combineReducers} from 'redux';

import lastResult from './last_result';
import quotes from './quotes';

export default combineReducers({
  lastResult,
  quotes,
});
