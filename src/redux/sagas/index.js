import { takeEvery, all } from 'redux-saga/effects';

import { types as promptTypes } from 'redux/actions/prompts';

import * as promptSagas from 'redux/sagas/prompts';

export default function* sagas() {
  yield all([
    takeEvery(
      promptTypes.PROMPT_BIO_ANSWERED,
      promptSagas.transitionFromBioPromptToMoreFeaturesPrompt
    ),
  ]);
}
