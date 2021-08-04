import React from "react";
import "./App.css"

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


     <ul>  {this.state.tasks.map((ele)=>{
         return <li>{ele}<button  onClick={()=>{
           let curTaskArr=this.state.tasks;
           let filteredArr=curTaskArr.filter((el)=>{
             return ele!=el
           })
           this.setState({tasks:filteredArr})
         }}>Delete</button></li>
       })}
      </ul>
       

   </div>
 )
};
}

export default App;
