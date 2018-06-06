import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import createfeed from './reducer/createfeed';

const middleware = applyMiddleware(thunk, promise());
const reducers = combineReducers({
  createfeed,
});

export default createStore(reducers, {}, middleware);
