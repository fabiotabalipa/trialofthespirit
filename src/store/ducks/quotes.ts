import {createActions, createReducer} from 'reduxsauce';

import {Quote, Quotes} from '../../globals/types';

const initialState: Quotes = [];

export const {Types, Creators} = createActions({
  addQuote: ['quote'],
  clearQuotes: null,
  replaceQuotes: ['quotes'],
});

const add = (state = initialState, {quote}: {quote: Quote}) => [
  ...state,
  quote,
];

const clear = () => initialState;

const replace = (state: Quotes, {quotes}: {quotes: Quotes}) =>
  quotes || initialState;

export default createReducer(initialState, {
  [Types.ADD_QUOTE]: add,
  [Types.CLEAR_QUOTES]: clear,
  [Types.REPLACE_QUOTES]: replace,
});
