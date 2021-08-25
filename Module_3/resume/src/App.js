import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Login from "./components/login"
import Navbar from "./components/navbar"
import Signup from "./components/signup"


let App=()=> {
  let dispatch=useDispatch();

  useEffect(()=>{
    let unsub= auth
  })










  return (
    <>
    <Router>
  <Navbar/>
    <Switch>
      
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/signup">
       <Signup/>
      </Route>
      <Route path ="/">
      <Home/>
      </Route>


    </Switch>


    </Router>
    </>
  );
}

export default App;
