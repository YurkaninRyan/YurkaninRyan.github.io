import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import features from 'redux/reducers/features';
import prompts from 'redux/reducers/prompts';
import theme from 'redux/reducers/theme';

import sagas from 'redux/sagas';

import {
  loadFromLocalStorage,
  persistToLocalStorage,
} from 'utils/localStorage';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable no-underscore-dangle */

const reducers = combineReducers({
  features,
  prompts,
  theme,
});

const initialState = window.localStorage.getItem('debugging')
  ? {}
  : loadFromLocalStorage();

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

store.subscribe(() => {
  persistToLocalStorage(store.getState());
});

sagaMiddleware.run(sagas);

export default store;
