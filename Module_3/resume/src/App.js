import { useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch } from  "react-router-dom";
import Navbar from './components/navbar';
import Login from "./components/login"
import Home from './components/home';
import SignUp from './components/signup';
let App=()=>{
  return(
    <div>
     
  <Router>
 <Navbar/>
 
 <Switch>

  <Route exact path="/login">
  <Login/>

  </Route>
  <Route exact path="/signup">

 <SignUp/>
</Route>
<Route exact path="/home">
  <Home/>

</Route>

 </Switch>


  </Router>

    </div>
  )
}


export default App;
