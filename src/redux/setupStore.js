import { createStore, combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { devToolsEnhancer } from 'redux-devtools-extension';

import features from 'redux/modules/features';
import prompts from 'redux/modules/prompts';
import theme from 'redux/modules/theme';

import {
  loadFromLocalStorage,
  persistToLocalStorage,
} from 'utils/localStorage';

const reducers = combineReducers({
  features,
  prompts,
  theme,
});

const store = createStore(
  enableBatching(reducers),
  devToolsEnhancer(loadFromLocalStorage())
);

store.subscribe(() => {
  persistToLocalStorage(store.getState());
});

export default store;
