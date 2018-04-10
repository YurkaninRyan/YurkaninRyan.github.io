import PromptConstants from 'constants/PromptConstants';

import { types as promptTypes } from 'redux/actions/prompts';

const initialState = {
  current: PromptConstants.INITIAL_GREETING,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case promptTypes.PROMPT_INITIAL_GREETING_ANSWERED: {
      return {
        ...state,
        current: PromptConstants.THEME,
      };
    }

    case promptTypes.PROMPT_THEME_ANSWERED: {
      return {
        ...state,
        current: PromptConstants.BIO,
      };
    }

    case promptTypes.PROMPT_GOTO: {
      return {
        ...state,
        current: action.prompt,
      };
    }

    default:
      return state;
  }
}
