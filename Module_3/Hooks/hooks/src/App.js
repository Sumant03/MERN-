

import {useState,useEffect, useDebugValue} from "react";
import { render } from "react-dom";

function App() {

  console.log("render the function")
   
  let[ count,setCount]=useState(0);
  let [process,setProcess]=useState("running");
    // useEffect ek hook hai to functional component ke ander hi use hota hai
  //it takes 2 arguments=> function, arr [optional]
  // based on you have passed the arr or not
  // we have 3 cases

  //case 1:
  // you have passed a function and an empty arr
  // then useEffect calls the passed function only once, after first render 
  // so it works like componentDidMount
  
  
  useEffect(() => {
    console.log("use effect was called");
   
    
   return()=>{
    console.log("clean up function")
  }

  }, []);




  // useEffect(() => {
  //   console.log(" case 2 useEffect was called");
 
     
  // })
  // //clean up function
  // return(
  //   ()=>console.log("clean up function")
  // )

  // });

//  useEffect(()=>{
//   let arr=process.split("i");
//   console.log(arr);
//  },[process]);





  return (
    <div className="App">
   
       <button onClick={()=>setCount(count+1)}>+</button>
       <div>
       <h1>{count}</h1>
      </div>
       <button onClick={()=>setCount(count-1)}>-</button>

        <p>{process}</p>
         <button onClick={()=>{
           setProcess("stop");
         }}>Kill process</button>
    </div>
  )
}

export default App;
