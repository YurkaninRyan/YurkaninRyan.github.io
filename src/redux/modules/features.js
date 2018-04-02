import FeatureConstants from 'constants/FeatureConstants';

const UNLOCK = 'ryan-yurkanin-pw/features/UNLOCK';

const initialState = Object.keys(FeatureConstants).reduce(
  (features, key) => ({
    ...features,
    [key]: false,
  }),
  {}
);

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UNLOCK:
      return {
        ...state,
        [action.feature]: action.value,
      };
    default:
      return state;
  }
}

// Action Creators
export function unlockFeature(feature, value = true) {
  return { type: UNLOCK, feature, value };
}
