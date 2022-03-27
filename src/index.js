import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux'
import {useSelector} from 'react-redux'


//Action
const increment = (state) => {
  console.log("clickBtn", state)
  return {
    type: "INCREMENT"
  }
}

const decrement = (state) => {
  console.log("clickBtn", state)
  return {
    type: "DECREMENT"
  }
}

const display = (state) => {
  console.log("clickBtn", state)
  return {
    type: "DISPLAY"
  }
}

// Reducer
const counter = (state = 0, action) => {
  console.log("click action in clickReducer: ", action.type)
  switch(action.type) {
      case "INCREMENT": return state + 1
      case "DECREMENT": return state - 1
      case "DISPLAY": return "Aishwarya"
      default: return state
      
  }
}

const allReducer = combineReducers({
  count: counter
})


//Store
let store = createStore(allReducer)
store.subscribe(() => console.log(store.getState()));
export default store;

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(display());



ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <div><h1>Aishwarya</h1></div> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
