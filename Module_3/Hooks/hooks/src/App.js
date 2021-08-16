

import {useState,useEffect} from "react";

function App() {

  console.log("render the function")
   
  let[ count,setCount]=useState(0);

    // useEffect ek hook hai to functional component ke ander hi use hota hai
  //it takes 2 arguments=> function, arr [optional]
  // based on you have passed the arr or not
  // we have 3 cases

  //case 1:
  // you have passed a function and an empty arr
  // then useEffect calls the passed function only once, after first render 
  // so it works like componentDidMount
  // useEffect(() => {
  //   console.log("use effect was called");
  // }, []);


  useEffect(() => {
    console.log(" case 2 useEffect was called");
  });







  return (
    <div className="App">
   
       <button onClick={()=>setCount(count+1)}>+</button>
       <div>
       <h1>{count}</h1>
      </div>
       <button onClick={()=>setCount(count-1)}>-</button>
    
    </div>
  )
}

export default App;
