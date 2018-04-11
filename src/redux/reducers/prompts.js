import PromptConstants from 'constants/PromptConstants';

import handleActions from 'redux/handleActions';

const initialState = {
  prompt: PromptConstants.INITIAL_GREETING,
};

export default handleActions(
  {
    PROMPTS: {
      GO_TO: (state, action) => ({ ...state, prompt: action.payload.prompt }),
      ANSWER_INITIAL_GREETING: state => ({
        ...state,
        prompt: PromptConstants.THEME,
      }),
      ANSWER_THEME: state => ({
        ...state,
        prompt: PromptConstants.BIO,
      }),
      ANSWER_MORE_FEATURES: state => ({
        ...state,
        prompt: null,
      }),
    },
  },
  initialState
);

export const getPrompt = state => state.prompts.prompt;
