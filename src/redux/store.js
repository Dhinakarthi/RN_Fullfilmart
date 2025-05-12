import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger'
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const logger = createLogger();

let middleware;

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development'){
    middleware = applyMiddleware(thunk, logger);
}
else{
    middleware = applyMiddleware(thunk);
}

const store = createStore(
    rootReducer,
    middleware,
);

export default store;

export const persist = persistStore(store);