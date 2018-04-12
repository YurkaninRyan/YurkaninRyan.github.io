import StatusConstants from 'constants/StatusConstants';

import handleActions from 'redux/handleActions';

const initialState = {
  articles: [],
  error: false,
  status: StatusConstants.NOT_LOADED,
};

export default handleActions(
  {
    ARTICLES: {
      GET: state => ({ ...state, status: StatusConstants.LOADING }),
      GET_COMPLETE: (state, action) => ({
        ...state,
        articles: action.payload.articles,
        status: StatusConstants.LOADED,
      }),
      GET_ERROR: (state, action) => ({
        ...state,
        articles: [],
        error: action.payload.error,
      }),
    },
  },
  initialState
);

export const getArticles = state => state.articles.articles;
export const getStatus = state => state.articles.status;
export const getError = state => state.articles.error;
