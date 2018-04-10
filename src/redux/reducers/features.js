import FeatureConstants from 'constants/FeatureConstants';

import { types as promptTypes } from 'redux/actions/prompts';

const initialState = Object.keys(FeatureConstants).reduce(
  (features, key) => ({
    ...features,
    [key]: false,
  }),
  {}
);

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case promptTypes.PROMPT_THEME_ANSWERED:
      return {
        ...state,
        [FeatureConstants.NAVBAR]: true,
      };
    case promptTypes.PROMPT_BIO_ANSWERED:
      return {
        ...state,
        [action.feature]: true,
      };
    case promptTypes.PROMPT_MORE_FEATURES_ANSWERED:
      return {
        ...state,
        ...action.features,
      };
    default:
      return state;
  }
}
