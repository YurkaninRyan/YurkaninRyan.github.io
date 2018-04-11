import createActions from 'redux/createActions';

export default createActions('prompts', {
  GO_TO: prompt => ({ prompt }),
  ANSWER_INITIAL_GREETING: null,
  ANSWER_THEME: color => ({ color }),
  ANSWER_BIO: feature => ({ feature }),
  ANSWER_MORE_FEATURES: features => ({ features }),
});
