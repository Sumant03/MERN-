import React from "react";
import { ReactDOM } from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor Called");
        this.state={
            on:false,
        }
    }

    componentDidMount(){
        console.log("component did mount was called");
    }

    componentDidUpdate(){
        console.log("component updated");
    }
    componentWillUnmount(){
        console.log("component is just deleting");
    }

    
    
    
    render(){
        console.log("render was called");
        return(
            <button 
            onClick={()=>{if(this.state.on){
                 this.setState({on:false})
            }else{
                this.setState({on:true})
            }}
        }>Click</button>
        )
    }
}


export default Child;