import { createStore, applyMiddleware, compose } from 'redux';

import middlewaresList from './middlewares';
import rootReducer from '../reducers';
import isProductionEnv from '../utils/isProductionEnv';

export default function configureStore() {
  if (isProductionEnv()) {
    return createStore(rootReducer, applyMiddleware(...middlewaresList));
  }
  // For redux devtools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewaresList)));

  // For Hot Module Replacement
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
