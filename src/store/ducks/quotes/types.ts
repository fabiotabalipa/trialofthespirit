import {QUOTE_TYPE_JEDI, QUOTE_TYPE_SITH} from '../../../globals/constants';
import {Error} from '../../../globals/types';

export const ActionTypes = {
  LOAD_FAILURE: '@quotes/LOAD_FAILURE',
  LOAD_REQUEST: '@quotes/LOAD_REQUEST',
  LOAD_SUCCESS: '@quotes/LOAD_SUCCESS',
};

export type Faction = typeof QUOTE_TYPE_JEDI | typeof QUOTE_TYPE_SITH;

export interface Quote {
  id: number;
  text: string;
  type: Faction;
}

export type Quotes = Quote[];

export interface QuotesState {
  data: Quotes;
  error: Error | null;
  loading: boolean;
}
