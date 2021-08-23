import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux';
import {Provider} from "react-redux";
import {countReducer,loginReducer} from "./redux/reducer"



let rootReducers=combineReducers({
    count:countReducer,
    login:loginReducer})

let myStore=createStore(rootReducers);

ReactDOM.render(
<Provider store={myStore}>
    <App/>
    </Provider>


,document.getElementById('root'));


