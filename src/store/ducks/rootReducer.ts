import {combineReducers} from 'redux';

import quotes from './quotes';
import result from './result';

export default combineReducers({
  quotes,
  result,
});
