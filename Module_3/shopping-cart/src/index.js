import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {Provider} from "react-redux";
import reducer from "./redux/reducers"

let myStore=createStore(reducer);



ReactDOM.render(
<Provider store={myStore}>
<App/>
</Provider>
,document.getElementById('root')
);
