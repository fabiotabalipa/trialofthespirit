import {call, put} from 'redux-saga/effects';

import {QuotesService as api} from '../../../services/quotes';
import {loadSuccess, loadFailure} from './actions';

export function* loadQuotes() {
  try {
    const quotes = yield call(api.fetchShuffledQuotes, 10);

    yield put(loadSuccess(quotes));
  } catch (err) {
    yield put(loadFailure(err));
  }
}
