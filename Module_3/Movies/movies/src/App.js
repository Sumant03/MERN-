import React from "react";
import Child from "./Child"

class App extends React.Component{
  constructor(props){
    super(props);
   this.state={
     child:false,
   }
  }


  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.child) {
              this.setState({ child: false });
            } else {
              this.setState({ child: true });
            }
          }}
        >
          child toggle
        </button>

        {this.state.child ? <Child /> : ""}

        
      </div>
    );
  }

}
export default App;