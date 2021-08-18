import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Login from "./component/Login"
import {Link} from "react-router-dom";
import AuthProvider from "./AuthProvider"

let App=()=>{
  return (

  <AuthProvider>
  <Router>
        <div>
        

        <Switch>
    
      <Route exact  path="/home">

        
      </Route>
      
      <Route exact path="/login">
       <Home/>
       </Route>
     

    </Switch>
    </div>

    </Router>
    </AuthProvider>
  )
}



export default App;









