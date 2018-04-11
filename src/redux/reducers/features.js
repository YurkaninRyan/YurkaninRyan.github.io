import FeatureConstants from 'constants/FeatureConstants';

import handleActions from 'redux/handleActions';

const initialState = Object.keys(FeatureConstants).reduce(
  (features, key) => ({
    ...features,
    [key]: false,
  }),
  {}
);

export default handleActions(
  {
    PROMPTS: {
      ANSWER_THEME: state => ({
        ...state,
        [FeatureConstants.NAVBAR]: true,
      }),
      ANSWER_BIO: (state, action) => ({
        ...state,
        [action.payload.feature]: true,
      }),
      ANSWER_MORE_FEATURES: (state, action) => ({
        ...state,
        ...action.payload.features,
      }),
    },
  },
  initialState
);
