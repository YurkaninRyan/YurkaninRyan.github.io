export const types = {
  PROMPT_GOTO: 'ryan-yurkanin-pw/prompts/PROMPT_GOTO',
  PROMPT_INITIAL_GREETING_ANSWERED:
    'ryan-yurkanin-pw/prompts/PROMPT_INITIAL_GREETING_ANSWERED',
  PROMPT_THEME_ANSWERED: 'ryan-yurkanin-pw/prompts/PROMPT_THEME_ANSWERED',
  PROMPT_BIO_ANSWERED: 'ryan-yurkanin-pw/prompts/PROMPT_BIO_ANSWERED',
  PROMPT_MORE_FEATURES_ANSWERED:
    'ryan-yurkanin-pw/prompts/PROMPT_MORE_FEATURES_ANSWERED',
};

export const actions = {
  goToPrompt: prompt => ({ type: types.PROMPT_GOTO, prompt }),
  answerInitialGreetingPrompt: () => ({
    type: types.PROMPT_INITIAL_GREETING_ANSWERED,
  }),
  answerThemePrompt: color => ({ type: types.PROMPT_THEME_ANSWERED, color }),
  answerBioPrompt: feature => ({ type: types.PROMPT_BIO_ANSWERED, feature }),
  answerMoreFeaturesPrompt: features => ({
    type: types.PROMPT_MORE_FEATURES_ANSWERED,
    features,
  }),
};
