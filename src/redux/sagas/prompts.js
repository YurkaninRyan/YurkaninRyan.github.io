/* eslint-disable import/prefer-default-export */

import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import PromptConstants from 'constants/PromptConstants';

import { actions as promptActions } from 'redux/actions/prompts';

export function* transitionFromBioPromptToMoreFeaturesPrompt() {
  yield put(promptActions.goToPrompt(PromptConstants.HAPPY_CLAPPING));
  yield delay(6000);
  yield put(promptActions.goToPrompt(PromptConstants.MORE_FEATURES));
}
