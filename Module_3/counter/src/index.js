import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./redux/reducer";
import { createStore } from 'redux';
import {Provider} from "react-redux";




let myStore=createStore(reducer);

ReactDOM.render(
<Provider store={myStore}><App/></Provider>


,document.getElementById('root'));


