import handleActions from 'redux/handleActions';

const initialState = {
  color: 'gray',
};

export default handleActions(
  {
    PROMPTS: {
      ANSWER_THEME: (state, action) => ({
        ...state,
        color: action.payload.color,
      }),
    },
  },
  initialState
);
