import createActions from 'redux/createActions';

export default createActions('articles', {
  GET: null,
  GET_COMPLETE: articles => ({ articles }),
  GET_ERROR: error => ({ error }),
});
