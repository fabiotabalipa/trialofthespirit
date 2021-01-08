import {Reducer} from 'redux';

import {ActionTypes, ResultState} from './types';

const INITIAL_STATE: ResultState = {
  data: null,
};

export default ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.DELAY:
      return {data: null};
    case ActionTypes.SET:
      return {data: action.payload.result};
    default:
      return state;
  }
}) as Reducer<ResultState>;
