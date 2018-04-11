import { createActions } from 'redux-actions';

export default (namespace, actions) => {
  const namespaced = createActions({
    YURKANIN: {
      [namespace.toUpperCase()]: {
        ...actions,
      },
    },
  });

  return namespaced.yurkanin[namespace.toLowerCase()];
};
