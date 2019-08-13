import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "placeholder-loading/dist/css/placeholder-loading.min.css"
import App from "./components/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux';
import store from './store';
// import { reducers } from './reducers'

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const element = document.getElementById('root');
render(
   <Provider store={store}>
    <App />
  </Provider>
  ,
  element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
