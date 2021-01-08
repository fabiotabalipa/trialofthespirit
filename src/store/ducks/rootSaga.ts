import {all, takeLatest} from 'redux-saga/effects';

import {loadQuotes} from './quotes/sagas';
import {ActionTypes as QuotesActionTypes} from './quotes/types';

import {setResult} from './result/sagas';
import {ActionTypes as ResultActionTypes} from './result/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(QuotesActionTypes.LOAD_REQUEST, loadQuotes),
    takeLatest(ResultActionTypes.DELAY, setResult),
  ]);
}
