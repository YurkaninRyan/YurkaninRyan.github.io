/* eslint-disable import/prefer-default-export */

import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import PromptConstants from 'constants/PromptConstants';

import prompts from 'redux/actions/prompts';

export function* transitionFromBioPromptToMoreFeaturesPrompt() {
  yield put(prompts.goTo(PromptConstants.HAPPY_CLAPPING));
  yield delay(6000);
  yield put(prompts.goTo(PromptConstants.MORE_FEATURES));
}
