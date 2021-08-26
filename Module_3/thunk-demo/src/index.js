import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from "react-redux";
import reducer from "./redux/reducers"
import thunk from "redux-thunk"

let myStore =createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={myStore}>
      <App/>
    </Provider>
    
,
  document.getElementById('root')
);

