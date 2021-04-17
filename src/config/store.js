import { createStore, applyMiddleware,  compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer  from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultMiddlewares = [
  thunkMiddleware,
];

const initialize = (initialState, middlewares = []) =>
createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...defaultMiddlewares, ...middlewares)));

export default initialize;