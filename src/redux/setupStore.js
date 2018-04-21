import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import articles from 'redux/reducers/articles';
import features from 'redux/reducers/features';
import prompts from 'redux/reducers/prompts';
import repos from 'redux/reducers/repos';
import theme from 'redux/reducers/theme';

import sagas from 'redux/sagas';

import {
  loadFromLocalStorage,
  persistToLocalStorage,
} from 'utils/localStorage';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const reducers = combineReducers({
  articles,
  features,
  prompts,
  repos,
  theme,
});

const initialState = window.localStorage.getItem('debugging')
  ? {}
  : loadFromLocalStorage();

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

store.subscribe(() => {
  persistToLocalStorage(store.getState());
});

sagaMiddleware.run(sagas);

export default store;
