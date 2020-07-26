import { createStore, applyMiddleware } from 'redux'
import  {rootReducer}  from '../reducers';
import Thunk from 'redux-thunk'
export const store = createStore(rootReducer, applyMiddleware(Thunk));
