import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from "./redux/reducers/userReducer"

let myStore=createStore(userReducer);


ReactDOM.render(
       <Provider store={myStore}><App/></Provider>
      
 
    
,
  document.getElementById('root')
);

