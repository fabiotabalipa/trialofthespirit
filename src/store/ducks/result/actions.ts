import {action} from 'typesafe-actions';

import {ActionTypes, Result} from './types';

export const set = (result: Result) => action(ActionTypes.SET, {result});

export const setWithDelay = (result: Result) =>
  action(ActionTypes.DELAY, {result});
