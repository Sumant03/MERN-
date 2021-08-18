import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Login from "./component/Login"
import AuthProvider from "./AuthProvider"

let App=()=>{
  return (
   <>
  <AuthProvider>
  <Router>
      
        

        <Switch>
    
      <Route exact  path="/">
      <Home/>
      </Route>
      
      <Route exact path="/login">
      <Login/>
      </Route>
     

    </Switch>
  

    </Router>
    </AuthProvider>

    </>
  )
}



export default App;









