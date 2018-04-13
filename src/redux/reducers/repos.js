import StatusConstants from 'constants/StatusConstants';

import handleActions from 'redux/handleActions';

const initialState = {
  repos: [],
  error: false,
  status: StatusConstants.NOT_LOADED,
};

export default handleActions(
  {
    REPOS: {
      GET: state => ({ ...state, status: StatusConstants.LOADING }),
      GET_COMPLETE: (state, action) => ({
        ...state,
        repos: action.payload.repos,
        status: StatusConstants.LOADED,
      }),
      GET_ERROR: (state, action) => ({
        ...state,
        repos: [],
        error: action.payload.error,
      }),
    },
  },
  initialState
);

export const getRepos = state => state.repos.repos;
export const getStatus = state => state.repos.status;
export const getError = state => state.repos.error;
