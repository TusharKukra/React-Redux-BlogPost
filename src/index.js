import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/** Importing Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

/** React-Toastify CSS */
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router} from 'react-router-dom';

/** Import Redux Store */
import {createStore} from 'redux';
import blogReducer from './redux/reducer/blogReducer';

/** Importing Provider from Redux */
import { Provider } from 'react-redux';


/** To hold the data even after Reloading */
const loadState = () => {

  try {

    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {

    // Ignore write errors;
  }
};

const peristedState = loadState();

/** Create Redux Store (first param: reducer, second: enhancer) */
const store = createStore(blogReducer, peristedState);

store.subscribe(() => {

  saveState(store.getState());

});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
