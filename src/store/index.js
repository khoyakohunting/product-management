// import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

// export type Store = ReduxStore<State, Action>
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;   