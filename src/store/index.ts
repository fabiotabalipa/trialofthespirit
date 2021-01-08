import {createDispatchHook, createSelectorHook} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import {RootState} from './ducks/rootState';

export const useDispatch = createDispatchHook();
export const useSelector = createSelectorHook<RootState>();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
