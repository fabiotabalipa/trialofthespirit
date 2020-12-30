import {StyleProp, TextStyle} from 'react-native';

/*
 * Business Logic
 * */

export interface Quote {
  answer: number | null;
  id: number;
  text: string;
  type: number;
}

export type Quotes = Array<Quote>;

export interface Result {
  result: number | null;
  ts: number | null;
}

/*
 * Framework
 * */

export interface IconProps {
  color: string;
  size: number;
  style?: StyleProp<TextStyle>;
}

/*
 * Store
 * */

export interface RootState {
  lastResult: Result;
  quotes: Quotes;
}
