import prompts from 'redux/actions/prompts';

describe('[Actions] - Prompts', () => {
  it('GO_TO', () => {
    expect(prompts.goTo('TEST')).toEqual({
      type: 'YURKANIN/PROMPTS/GO_TO',
      payload: {
        prompt: 'TEST',
      },
    });
  });

  it('ANSWER_INITIAL_GREETING', () => {
    expect(prompts.answerInitialGreeting()).toEqual({
      type: 'YURKANIN/PROMPTS/ANSWER_INITIAL_GREETING',
    });
  });

  it('ANSWER_THEME', () => {
    expect(prompts.answerTheme('green')).toEqual({
      type: 'YURKANIN/PROMPTS/ANSWER_THEME',
      payload: {
        color: 'green',
      },
    });
  });

  it('ANSWER_BIO', () => {
    expect(prompts.answerBio('ProfessionalBio')).toEqual({
      type: 'YURKANIN/PROMPTS/ANSWER_BIO',
      payload: {
        feature: 'ProfessionalBio',
      },
    });
  });

  it('ANSWER_MORE_FEATURES', () => {
    expect(prompts.answerMoreFeatures({ a: true, b: false })).toEqual({
      type: 'YURKANIN/PROMPTS/ANSWER_MORE_FEATURES',
      payload: {
        features: {
          a: true,
          b: false,
        },
      },
    });
  });
});
