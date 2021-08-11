
import Button from "./Button";
import "./App.css"
function App() {
  return (
    <div className="App">
    <div class ="row"> 
    <Button symbol="7" color="red"/> 
     <Button symbol="8"color="red"/> 
      <Button symbol="9"color="red"/>  
      <Button symbol="/"/>
      </div>
     <div class ="row"> 
        
        <Button symbol="4" color="red"/> 
         <Button  symbol="5"color="red"/>  
         <Button symbol="6" color="red"/> 
         <Button symbol="*"/>
         </div>
     <div class ="row"> 
       
        <Button symbol="1" color="red"/> 
         <Button symbol="2" color="red"/> 
          <Button symbol="3" color="red"/> 
          <Button symbol="+"/></div>
     <div class ="row">   
    
     <Button symbol="0" color="red"/>  
     <Button symbol="." color="red"/> 
      <Button  symbol="=" color="red"/> 
      <Button symbol="-"/></div>
     </div>
  );
}

export default App;
