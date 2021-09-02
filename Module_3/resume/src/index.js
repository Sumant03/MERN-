import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./redux/rootReducer"

let myStore=createStore(rootReducer);


ReactDOM.render(
       <Provider store={myStore}><App/></Provider>
      
 
    
,
  document.getElementById('root')
);

