import {Reducer} from 'redux';

import {ActionTypes, QuotesState} from './types';

const INITIAL_STATE: QuotesState = {
  data: [],
  error: null,
  loading: false,
};

export default ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {...state, data: [], error: null, loading: true};
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };
    case ActionTypes.LOAD_FAILURE:
      return {
        ...state,
        data: [],
        error: {msg: action.payload.msg},
        loading: false,
      };
    default:
      return state;
  }
}) as Reducer<QuotesState>;
