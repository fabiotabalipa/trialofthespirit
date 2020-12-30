import {createActions, createReducer} from 'reduxsauce';

import {Result} from '../../globals/types';

const initialState: Result = {
  result: null,
  ts: null,
};

export const {Types, Creators} = createActions({
  setResult: ['result'],
});

const set = (state: Result, {result}: {result: Result}) =>
  result || initialState;

export default createReducer(initialState, {
  [Types.SET_RESULT]: set,
});
