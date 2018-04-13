/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import repos from 'redux/actions/repos';

import getProxyURL from 'utils/getProxyURL';

function githubReposAPI() {
  return axios.get(getProxyURL('https://github.com/yurkaninryan'));
}

function parsePinnedRepos(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  const pinned = container.querySelectorAll('.pinned-repo-item-content');

  return Array.from(pinned).map(repo => ({
    title: repo.querySelector('.d-block').innerText.trim(),
    link: `https://www.github.com${repo
      .querySelector('.d-block a')
      .getAttribute('href')}`,
    description: repo.querySelector('.pinned-repo-desc').innerText.trim(),
    language: repo
      .querySelector('.repo-language-color')
      .nextSibling.textContent.trim(),
    stars: repo.querySelector('a[href*="stargazers"]')
      ? repo.querySelector('a[href*="stargazers"]').innerText.trim()
      : 0,
    forks: repo.querySelector('a[href*="network"]')
      ? repo.querySelector('a[href*="network"]').innerText.trim()
      : 0,
  }));
}

export function* onGetRepos() {
  try {
    const payload = yield call(githubReposAPI);
    yield put(repos.getComplete(parsePinnedRepos(payload.data)));
  } catch (error) {
    yield put(repos.getError(error));
  }
}
