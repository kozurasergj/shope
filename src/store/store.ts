import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootState } from '../interface/interfaces';

import { reducerCard } from './reducerCard';

const rootReducer:rootState = combineReducers({
  reducerCard,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
