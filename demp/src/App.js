import React from "react";
import "./App.css"
import List from "./List";

class App extends React.Component{

  state={tasks:["Make coffee","make notes","go to jog"],
  currentInput:"",
}

render = () => {

  return (
   <div>

    <input 
    
    className="input-box"
    type="text" 
    onChange={(e)=>{this.setState({currentInput:e.currentTarget.value})}} 
    onKeyDown={(e)=>{
      if(e.key=="Enter"){
      this.setState({
      
        tasks:[...this.state.tasks,this.state.currentInput],
        currentInput:"",
        
      });
    }
    }} 
    value={this.state.currentInput} 
   />


  <List   tasks={this.state.tasks}/>
       

   </div>
 )
};
}

export default App;
