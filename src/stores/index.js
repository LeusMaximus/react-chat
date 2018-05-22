import { createStore, applyMiddleware } from 'redux';

import middlewaresList from './middlewares';
import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middlewaresList)
  );
}
