/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import articles from 'redux/actions/articles';

import getProxyURL from 'utils/getProxyURL';

function mediumArticlesAPI() {
  return axios.get(
    getProxyURL('https://medium.com/@yurkaninryan/latest?format=json')
  );
}

export function* onGetArticles() {
  try {
    const polluted = yield call(mediumArticlesAPI);
    const cleanData = JSON.parse(polluted.data.replace('])}while(1);</x>', ''));
    const posts = cleanData.payload.references.Post;

    yield put(articles.getComplete(Object.keys(posts).map(k => posts[k])));
  } catch (error) {
    yield put(articles.getError(error));
  }
}
