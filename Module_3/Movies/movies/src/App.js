import React from "react";
import Child from "./Child"

class App extends React.Component{
 componentDidMount(){
  //It will get data here 

 let f=async ()=>{
    let result=await fetch("/movies");
    console.log(result);
    let json=await result.json();
    console.log(json);
 }
  f();

 }

  render() {
    return (
      <div>
       
        
      </div>
    );
  }

}
export default App;