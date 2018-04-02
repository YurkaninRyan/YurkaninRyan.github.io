const STATE_KEY = 'ryan-yurkanin-pw-state';

export function loadFromLocalStorage() {
  try {
    const state = localStorage.getItem(STATE_KEY);
    if (!state) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
}

export function persistToLocalStorage(state) {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch (e) {
    // Don't do anything if we can't use local storage.
  }
}
