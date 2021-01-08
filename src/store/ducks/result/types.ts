import {
  RESULT_BALANCED,
  RESULT_JEDI,
  RESULT_SITH,
} from '../../../globals/constants';

export const ActionTypes = {
  DELAY: '@result/DELAY',
  SET: '@result/SET',
};

export type Result =
  | typeof RESULT_BALANCED
  | typeof RESULT_JEDI
  | typeof RESULT_SITH
  | null;

export interface ResultState {
  data: Result;
}
