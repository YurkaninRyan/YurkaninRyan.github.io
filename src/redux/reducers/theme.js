import { types as promptTypes } from 'redux/actions/prompts';

const initialState = {
  color: 'gray',
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case promptTypes.PROMPT_THEME_ANSWERED:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
}
