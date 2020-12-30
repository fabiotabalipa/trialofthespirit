import {Dispatch} from 'react';
import {createDispatchHook, createSelectorHook} from 'react-redux';
import {createStore} from 'redux';
import {DefaultActionCreators} from 'reduxsauce';

import reducers from './ducks';
import {RootState} from '../globals/types';

export const useDispatch = createDispatchHook<
  Dispatch<DefaultActionCreators>
>();

export const useSelector = createSelectorHook<RootState>();

export default createStore(reducers);
