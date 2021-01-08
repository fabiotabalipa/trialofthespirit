import {AnyAction} from 'redux';

import {delay, put} from 'redux-saga/effects';

import {set} from './actions';

export function* setResult(action: AnyAction) {
  yield delay(900);

  yield put(set(action.payload.result));
}
