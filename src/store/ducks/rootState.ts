import {QuotesState} from './quotes/types';
import {ResultState} from './result/types';

export interface RootState {
  quotes: QuotesState;
  result: ResultState;
}
