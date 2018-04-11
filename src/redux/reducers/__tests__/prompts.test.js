import PromptConstants from 'constants/PromptConstants';

import actions from 'redux/actions/prompts';
import reducer from 'redux/reducers/prompts';

describe('[REDUCERS] - Prompts', () => {
  it('GO_TO', () => {
    expect(
      reducer(undefined, actions.goTo(PromptConstants.THEME))
    ).toHaveProperty('prompt', PromptConstants.THEME);
  });

  it('ANSWER_INITIAL_GREETING', () => {
    expect(reducer(undefined, actions.answerInitialGreeting())).toHaveProperty(
      'prompt',
      PromptConstants.THEME
    );
  });

  it('ANSWER_THEME', () => {
    expect(reducer(undefined, actions.answerTheme())).toHaveProperty(
      'prompt',
      PromptConstants.BIO
    );
  });

  it('ANSWER_MORE_FEATURES', () => {
    expect(reducer(undefined, actions.answerMoreFeatures())).toHaveProperty(
      'prompt',
      null
    );
  });
});
