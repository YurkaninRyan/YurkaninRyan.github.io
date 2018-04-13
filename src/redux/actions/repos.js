import createActions from 'redux/createActions';

export default createActions('repos', {
  GET: null,
  GET_COMPLETE: repos => ({ repos }),
  GET_ERROR: error => ({ error }),
});
