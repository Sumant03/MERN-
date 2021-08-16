import {countContext} from "./App"
import {useContext} from "react"


let  D=()=> {

let valueOfObject=useContext(countContext);

 return (
    <div className="App">
     

     <button onClick={()=>{
         valueOfObject.setCount(valueOfObject.count+1);
     }}>
    +
     </button>
     <p>{valueOfObject.count}</p>
     <button onClick={()=>{
         valueOfObject.setCount(valueOfObject.count-1);
     }}>
    -

     </button>
    </div>
  );
}

export default D;