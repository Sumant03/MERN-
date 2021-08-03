import React from "react";

class App extends React.Component{

  state={tasks:["Make coffee","make notes","go to jog"]}

render = () => {
  return (
 <ul>
{
  this.state.tasks.map((ele)=>{
    return <li>{ele}</li>
  })
}



 </ul>
 )
};
}

export default App;
