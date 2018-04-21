const STATE_KEY = 'ryan-yurkanin-pw-state';

export function loadFromLocalStorage() {
  try {
    const state = localStorage.getItem(STATE_KEY);
    if (!state) {
      return undefined;
    }

    const rehydrate = JSON.parse(state);

    // We accidentally persisted these.
    delete rehydrate.repos;
    delete rehydrate.articles;

    return rehydrate;
  } catch (e) {
    return undefined;
  }
}

export function persistToLocalStorage(state) {
  const { articles, repos, ...persist } = state;
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(persist));
  } catch (e) {
    // Don't do anything if we can't use local storage.
  }
}
