import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const generalMiddlewares = [thunkMiddleware];
const devMiddlewares = [loggerMiddleware];

const middlewaresList = process.env.NODE_ENV === 'production'
  ? [...generalMiddlewares]
  : [...generalMiddlewares, ...devMiddlewares];

export default middlewaresList;
