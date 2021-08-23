import { useDispatch,useSelector } from 'react-redux';
import {incrementCreator,decrementCreator,loginCreator, logoutCreator} from "./redux/actions"
import './App.css';

let App=()=>{
  let state=useSelector(function(state){
    return state;
  })


let dispatch=useDispatch()


  return (
    <div className="App">
    <button
    
    onClick={()=>{
      dispatch(loginCreator());
    }}
    >
      
      Login</button>
    
    <button
    onClick={()=>{
      dispatch(logoutCreator());
    }}
    >Logout</button>
    <br></br>
     <button
    onClick={()=>{
      dispatch(incrementCreator(1));
    }}
    
    >+1</button>
      <button
    onClick={()=>{
      dispatch(incrementCreator(10));
    }}
    
    >+10</button>
    <p>{state}</p>
    <button  
      onClick={()=>{
        dispatch(decrementCreator());
      }}
      >-</button>
    </div>
  );

}

export default App;
