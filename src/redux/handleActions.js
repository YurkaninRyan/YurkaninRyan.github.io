import { handleActions } from 'redux-actions';

export default (actions, initial) =>
  handleActions(
    {
      YURKANIN: {
        ...actions,
      },
    },
    initial
  );
