import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux'

let myStore=createStore(useReducer);

ReactDOM.render(
    <Provider store={myStore} >
      <App />
    </Provider>
    
,
  document.getElementById('root')
);

