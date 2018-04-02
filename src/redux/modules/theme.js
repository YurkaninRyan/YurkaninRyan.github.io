const SET_THEME = 'ryan-yurkanin-pw/prompts/SET_THEME';

const initialState = {
  color: 'gray',
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
}

export function setTheme(color) {
  return { type: SET_THEME, color };
}
