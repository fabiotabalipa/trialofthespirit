import {action} from 'typesafe-actions';

import {ActionTypes, Quotes} from './types';

export const loadFailure = (msg: string) =>
  action(ActionTypes.LOAD_FAILURE, {msg});

export const load = () => action(ActionTypes.LOAD_REQUEST);

export const loadSuccess = (data: Quotes) =>
  action(ActionTypes.LOAD_SUCCESS, {data});
