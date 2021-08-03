import React from 'react';  //creation logic
import ReactDOM from 'react-dom'; //render ogic
import App from "./App";

//App is a component we have imported
// import MyComp from './MyComp';


ReactDOM.render(
  
  <div>
     {/* <MyComp/>
     <MyComp/>
     <MyComp/>
     <MyComp/>
     <MyComp/> */}

     <App/>
  </div> 
  ,  //ek component
     document.getElementById('root')
              );
