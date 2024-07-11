import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import { rootReducer } from './root_reducer';

const middleWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancer);
