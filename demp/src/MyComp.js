//functonal Component

// let MyComp = () => {
//     return (
//       <div>
//         <h1>This is our first react app.</h1>
//          <p>Hi there</p>
//          <ul>
//              <li>React</li>
//              <li>Css</li>
//              <li>Html</li>
//          </ul>
//       </div>
      
      
//     );
//   };
  
//   export default MyComp;


import React from "react";

class MyComp extends React.Component{
    
    state={
        someNumber:2
    }
    
    render=()=>{
        return (
            <div>
                <h1>{this.state.someNumber}</h1>
                <button onClick={()=>{
                    // console.log("button was clicked");
                    this.setState({someNumber:this.state.someNumber+1})
                }}>I will dp something</button>
                               <button onClick={()=>{
                    // console.log("button was clicked");
                    this.setState({someNumber:this.state.someNumber-1})
                }}>I will dp something</button>
            </div>
        )
    }
}

export default MyComp;