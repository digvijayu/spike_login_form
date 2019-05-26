import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers';

const rootReducer = combineReducers({
  app: reducer,
});

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
