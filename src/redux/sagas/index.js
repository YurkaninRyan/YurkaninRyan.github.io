import { takeEvery, all } from 'redux-saga/effects';

import articles from 'redux/actions/articles';
import prompts from 'redux/actions/prompts';
import repos from 'redux/actions/repos';

import * as articleSagas from 'redux/sagas/articles';
import * as promptSagas from 'redux/sagas/prompts';
import * as repoSagas from 'redux/sagas/repos';

export default function* sagas() {
  yield all([
    takeEvery(
      prompts.answerBio().type,
      promptSagas.transitionFromBioPromptToMoreFeaturesPrompt
    ),
    takeEvery(articles.get().type, articleSagas.onGetArticles),
    takeEvery(repos.get().type, repoSagas.onGetRepos),
  ]);
}
