import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__);
store.subscribe(() => console.log(store.getState()));

export default {store}