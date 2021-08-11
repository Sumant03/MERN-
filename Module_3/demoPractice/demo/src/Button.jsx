
import  "./Button.css"

let Button =({symbol,color,handleClick})=>{
   
    return (
        
        <div className="btn" 
        onClick={()=> handleClick(symbol)}
        style={{backgroundColor:color}}>
        {symbol}
    
          
        </div>
    )
}

export default Button;