
// import { useState,createContext} from 'react';
// import B from "./B";

// let countContext=createContext();

// let App=()=> {

//   let [count,setCount]=useState(0);


//   return (
//     <div className="App">
      
//        <countContext.Provider value={{count,setCount}}>
//        <B/>
//        </countContext.Provider>
      
      

//     </div>
//   );
// }

// export default App;
// export {countContext}

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home"
import {Link} from "react-router-dom";


let App=()=>{
  return (
    <Router>
        <div>
        

        <Switch>
    
      <Route exact  path="/">

        <h3><Link class="nav-link" to="/home">Home</Link></h3>
        <div><h1>Login with Google</h1></div>  
      </Route>
      
      <Route exact path="/home">
       <Home/>
       </Route>
     

    </Switch>
    </div>

    </Router>
  )
}



export default App;









