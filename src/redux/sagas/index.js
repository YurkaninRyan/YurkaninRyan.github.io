import { takeEvery, all } from 'redux-saga/effects';

import * as promptSagas from 'redux/sagas/prompts';

export default function* sagas() {
  yield all([
    takeEvery(
      'YURKANIN/PROMPTS/ANSWER_BIO',
      promptSagas.transitionFromBioPromptToMoreFeaturesPrompt
    ),
  ]);
}
