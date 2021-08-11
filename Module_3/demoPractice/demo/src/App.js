import {useState} from "react";
import Button from "./Button";
import "./App.css"
import Input from "./Input"
function App() {
 
 const [text,setText]=useState("");
 const [result,setResult]=useState("");
 
 const addText=(value) => {
setText((text)=> [...text,value+" "]);
};

  return (
    <div className="App">
     <Input  text={text} result={result}/>


    <div class ="row"> 
    <Button symbol="7" handleClick={addText}  /> 
     <Button symbol="8" handleClick={addText}/> 
      <Button symbol="9" handleClick={addText}/>  
      <Button symbol="/" color="#e8b03f" handleClick={addText}/>
      </div>
     <div class ="row"> 
        
        <Button symbol="4"handleClick={addText}/> 
         <Button  symbol="5" handleClick={addText}/>  
         <Button symbol="6"handleClick={addText}/> 
         <Button symbol="*" color="#e8b03f" handleClick={addText}/>
         </div>
     <div class ="row"> 
       
        <Button symbol="1"  handleClick={addText}/> 
         <Button symbol="2" handleClick={addText} /> 
          <Button symbol="3" handleClick={addText} /> 
          <Button symbol="+" color="#e8b03f" handleClick={addText}/></div>
     <div class ="row">   
    
     <Button symbol="0" handleClick={addText}/>  
     <Button symbol="." handleClick={addText}/> 
      <Button  symbol="=" /> 
      <Button symbol="-" color="#e8b03f" handleClick={addText}/></div>
     <div class="row">
     <Button/>
     <Button symbol="Clear" color="red"/>
     <Button/>
     </div>
     
      </div>
    
  );
}

export default App;
