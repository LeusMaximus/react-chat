import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import isProductionEnv from '../utils/isProductionEnv';

const commonMiddlewares = [thunkMiddleware];
const devMiddlewares = [loggerMiddleware];

const middlewaresList = isProductionEnv()
  ? commonMiddlewares
  : [...commonMiddlewares, ...devMiddlewares];

export default middlewaresList;
