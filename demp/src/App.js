import React from "react";

class App extends React.Component{

  state={tasks:["Make coffee","make notes","go to jog"],
  currentInput:"",
}

render = () => {
  return (
    <div>
      <input type="text"  onChange={(e)=>{
        this.setState({currentInput:e.currentTarget.value})
      }} 
      value={this.state.currentInput}/>
 <ul>
{
  this.state.tasks.map((ele)=>{
    return <li>{ele}</li>
  })
}



 </ul>
 </div>
 )
};
}

export default App;
