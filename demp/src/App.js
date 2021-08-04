import React from "react";
import "./App.css"
import List from "./List";
import Input from "./In"

class App extends React.Component{

  state={tasks:["Make coffee","make notes","go to jog"],
  currentInput:"",
}

deletetask=(singleTask)=>{
  let curTaskArr=this.state.tasks;
  let filteredArr=curTaskArr.filter((el)=>{
    return el!=singleTask
  })
  this.setState({tasks:filteredArr})
}

handleCurrInput=(value)=>{
 this.setState({currentInput:value})
}


handleTasks=()=>{
  this.setState({
      
    tasks:[...this.state.tasks,this.state.currentInput],
    currentInput:"",
    
  });
}

render = () => {

  return (
   <div>

  <Input handleCurrInput={this.handleCurrInput} handleTasks={this.handleTasks} currentInput={this.state.currentInput}   />  
  <List tasks={this.state.tasks} deletetask={this.deletetask}/> 
   
   </div>
 )
};
}

export default App;
