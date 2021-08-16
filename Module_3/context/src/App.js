
import { useState,createContext} from 'react';
import B from "./B";

let countContext=createContext();

let App=()=> {

  let [count,setCount]=useState(0);


  return (
    <div className="App">
      
       <countContext.Provider value={{count,setCount}}>
       <B/>
       </countContext.Provider>
      
      

    </div>
  );
}

export default App;
export {countContext}